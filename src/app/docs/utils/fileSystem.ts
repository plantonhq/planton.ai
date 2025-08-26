import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DOCS_DIRECTORY } from '@/lib/constants';

export interface DocItem {
  name: string;
  type: 'file' | 'directory';
  path: string;
  children?: DocItem[];
  // Enhanced properties for dynamic sidebar
  title?: string;
  description?: string;
  icon?: string;
  category?: string;
  order?: number;
  badge?: string; // For "Popular", "Beta", etc.
  isExternal?: boolean;
  externalUrl?: string;
  hasIndex?: boolean; // For directories with index files
}

export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    icon?: string;
    category?: string;
    order?: number;
    badge?: string;
    isExternal?: boolean;
    externalUrl?: string;
    [key: string]: string | string[] | number | boolean | undefined;
  };
  isMdx?: boolean;
}

// Icon mapping for different content types
const iconMap: Record<string, string> = {
  // Default icons
  'chart-line': '📊',
  flag: '🚩',
  eye: '👁️',
  gear: '⚙️',
  users: '👥',
  database: '🗄️',
  code: '💻',
  rocket: '🚀',
  book: '📚',
  docs: '📖',
  // Planton-specific additions
  platform: '🏢',
  tour: '🧭',
  concepts: '🧩',
  hierarchy: '🌳',
  'credit-card': '💳',
  service: '🛎️',
  pipeline: '🔗',
  cloud: '☁️',
  community: '👥',
  company: '🏢',
  handbook: '📋',
  guide: '🗺️',
  tutorial: '🎓',
  api: '🔌',
  sdk: '🛠️',
  integration: '🔗',
  migration: '🔄',
  deployment: '🚀',
  monitoring: '📈',
  security: '🔒',
  performance: '⚡',
  analytics: '📈',
  experiment: '🧪',
  feature: '✨',
  survey: '📝',
  error: '❌',
  session: '🎬',
  replay: '▶️',
  warehouse: '🏭',
  ai: '🤖',
  llm: '🧠',
  max: '🎯',
  product: '📦',
  web: '🌐',
  mobile: '📱',
  desktop: '💻',
  // duplicate 'cloud' key removed (defined above in Planton-specific additions)
  'self-host': '🏠',
  migrate: '🔄',
  'reverse-proxy': '🔄',
  billing: '💰',
  privacy: '🔒',
  contribute: '🤝',
  support: '🆘',
  changelog: '📝',
  roadmap: '🗺️',
  blog: '📰',
  careers: '💼',
  investors: '💎',
  press: '📢',
  faq: '❓',
  status: '📊',
  soc2: '🛡️',
  hipaa: '🏥',
  gdpr: '🇪🇺',
  ccpa: '🇺🇸',
  terms: '📜',
  policy: '📋',
  // Additional icons you can add
  welcome: '👋',
  home: '🏠',
  star: '⭐',
  heart: '❤️',
  fire: '🔥',
  sparkles: '✨',
  light: '💡',
  zap: '⚡',
  wave: '👋',
  party: '🎉',
  gift: '🎁',
  trophy: '🏆',
  target: '🎯',
  compass: '🧭',
  map: '🗺️',
  telescope: '🔭',
  microscope: '🔬',
  crystal: '🔮',
  gem: '💎',
  crown: '👑',
  checkmark: '✅',
  lightning: '⚡',
  sunrise: '🌅',
  rainbow: '🌈',
  comet: '☄️',
  satellite: '🛰️',
  spaceship: '🚀',
  airplane: '✈️',
  helicopter: '🚁',
  parachute: '🪂',
  anchor: '⚓',
  sailboat: '⛵',
  speedboat: '🚤',
  construction: '🚧',
  wrench: '🔧',
  hammer: '🔨',
  toolbox: '🧰',
  magnet: '🧲',
  link: '🔗',
  chains: '⛓️',
  unlock: '🔓',
  key: '🔑',
  bell: '🔔',
  megaphone: '📣',
  loudspeaker: '📢',
  postal: '📮',
  inbox: '📥',
  outbox: '📤',
  package: '📦',
  label: '🏷️',
  bookmark: '🔖',
  calendar: '📅',
  clock: '🕐',
  hourglass: '⏳',
  stopwatch: '⏱️',
  timer: '⏲️',
  alarm: '⏰',
  watch: '⌚',
  battery: '🔋',
  plug: '🔌',
  bulb: '💡',
  flashlight: '🔦',
  candle: '🕯️',
  diya: '🪔',
  bricks: '🧱',
  window: '🪟',
  door: '🚪',
  bed: '🛏️',
  couch: '🛋️',
  chair: '🪑',
  toilet: '🚽',
  shower: '🚿',
  bathtub: '🛁',
  mouse: '🖱️',
  keyboard: '⌨️',
  printer: '🖨️',
  fax: '📠',
  television: '📺',
  radio: '📻',
  microphone: '🎤',
  headphones: '🎧',
  speaker: '🔈',
  mute: '🔇',
  sound: '🔊',
  notification: '🔔',
  search: '🔍',
  zoom: '🔎',
  syringe: '💉',
  pill: '💊',
  dna: '🧬',
  microbe: '🦠',
  petri: '🧫',
  test: '🧪',
  stethoscope: '🩺',
  xray: '🩻',
  adhesive: '🩹'
};

// Category-based icon mapping
const categoryIcons: Record<string, string> = {
  products: '📦',
  docs: '📚',
  community: '👥',
  company: '🏢',
  handbook: '📖',
  solutions: '💡',
  'open-source': '🔓',
  'general-pages': '📄',
  'by-use-case': '🎯',
  'chat-ops': '💬',
  deployment: '🚀',
  monitoring: '📊',
  security: '🔒',
  performance: '⚡',
  analytics: '📈',
  experiments: '🧪',
  'feature-flags': '🚩',
  'session-replay': '🎬',
  'error-tracking': '❌',
  surveys: '📝',
  'data-pipelines': '🔗',
  'data-warehouse': '🏭',
  'llm-observability': '🤖',
  'max-ai': '🎯'
};

// Resolve an icon value coming from frontmatter. Accepts PostHog-style names
// (e.g., "docs", "guide", "api") and maps them to emoji. Falls back to
// default icon logic if the provided value isn't recognized.
function resolveIcon(
  metaIcon: string | undefined,
  type: 'file' | 'directory',
  name: string,
  category?: string
): string {
  if (metaIcon) {
    const mapped = iconMap[metaIcon];
    if (mapped) {
      return mapped;
    }
  }
  return getDefaultIcon(type, name, category);
}

// Default icons for different file types
const getDefaultIcon = (type: string, name: string, category?: string): string => {
  // Check if there's a specific icon in the name
  const nameLower = name.toLowerCase();

  // Check for specific patterns in the name
  if (nameLower.includes('api')) return iconMap['api'];
  if (nameLower.includes('sdk')) return iconMap['sdk'];
  if (nameLower.includes('guide')) return iconMap['guide'];
  if (nameLower.includes('tutorial')) return iconMap['tutorial'];
  if (nameLower.includes('integration')) return iconMap['integration'];
  if (nameLower.includes('migration')) return iconMap['migration'];
  if (nameLower.includes('deployment')) return iconMap['deployment'];
  if (nameLower.includes('monitoring')) return iconMap['monitoring'];
  if (nameLower.includes('security')) return iconMap['security'];
  if (nameLower.includes('performance')) return iconMap['performance'];
  if (nameLower.includes('analytics')) return iconMap['analytics'];
  if (nameLower.includes('experiment')) return iconMap['experiment'];
  if (nameLower.includes('feature')) return iconMap['feature'];
  if (nameLower.includes('survey')) return iconMap['survey'];
  if (nameLower.includes('error')) return iconMap['error'];
  if (nameLower.includes('session')) return iconMap['session'];
  if (nameLower.includes('replay')) return iconMap['replay'];
  if (nameLower.includes('flag')) return iconMap['flag'];
  if (nameLower.includes('pipeline')) return iconMap['pipeline'];
  if (nameLower.includes('warehouse')) return iconMap['warehouse'];
  if (nameLower.includes('ai')) return iconMap['ai'];
  if (nameLower.includes('llm')) return iconMap['llm'];
  if (nameLower.includes('max')) return iconMap['max'];
  if (nameLower.includes('product')) return iconMap['product'];
  if (nameLower.includes('web')) return iconMap['web'];
  if (nameLower.includes('mobile')) return iconMap['mobile'];
  if (nameLower.includes('desktop')) return iconMap['desktop'];
  if (nameLower.includes('cloud')) return iconMap['cloud'];
  if (nameLower.includes('self-host')) return iconMap['self-host'];
  if (nameLower.includes('migrate')) return iconMap['migrate'];
  if (nameLower.includes('reverse-proxy')) return iconMap['reverse-proxy'];
  if (nameLower.includes('billing')) return iconMap['billing'];
  if (nameLower.includes('privacy')) return iconMap['privacy'];
  if (nameLower.includes('contribute')) return iconMap['contribute'];
  if (nameLower.includes('support')) return iconMap['support'];
  if (nameLower.includes('changelog')) return iconMap['changelog'];
  if (nameLower.includes('roadmap')) return iconMap['roadmap'];
  if (nameLower.includes('blog')) return iconMap['blog'];
  if (nameLower.includes('careers')) return iconMap['careers'];
  if (nameLower.includes('investors')) return iconMap['investors'];
  if (nameLower.includes('press')) return iconMap['press'];
  if (nameLower.includes('faq')) return iconMap['faq'];
  if (nameLower.includes('status')) return iconMap['status'];
  if (nameLower.includes('soc2')) return iconMap['soc2'];
  if (nameLower.includes('hipaa')) return iconMap['hipaa'];
  if (nameLower.includes('gdpr')) return iconMap['gdpr'];
  if (nameLower.includes('ccpa')) return iconMap['ccpa'];
  if (nameLower.includes('terms')) return iconMap['terms'];
  if (nameLower.includes('policy')) return iconMap['policy'];

  // Check category-based icons
  if (category && categoryIcons[category]) {
    return categoryIcons[category];
  }

  // Default icons based on type
  return type === 'directory' ? '📁' : '📄';
};

export async function getMarkdownContent(filePath: string): Promise<string> {
  // Try different file extensions and paths (.md and .mdx)
  const possiblePaths = [
    path.join(DOCS_DIRECTORY, `${filePath}.md`),
    path.join(DOCS_DIRECTORY, `${filePath}.mdx`),
    path.join(DOCS_DIRECTORY, filePath, 'index.md'),
    path.join(DOCS_DIRECTORY, filePath, 'index.mdx'),
    path.join(DOCS_DIRECTORY, filePath, 'README.md'),
    path.join(DOCS_DIRECTORY, filePath, 'README.mdx')
  ];

  for (const candidatePath of possiblePaths) {
    if (fs.existsSync(candidatePath)) {
      return fs.readFileSync(candidatePath, 'utf-8');
    }
  }

  // If no markdown file found, try to find any .md or .mdx file in the directory
  const dirPath = path.join(DOCS_DIRECTORY, filePath);
  if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
    const files = fs.readdirSync(dirPath);
    const mdLikeFile = files.find((file) => file.endsWith('.md') || file.endsWith('.mdx'));
    if (mdLikeFile) {
      return fs.readFileSync(path.join(dirPath, mdLikeFile), 'utf-8');
    }
  }

  throw new Error(`No markdown file found for path: ${filePath}`);
}

export async function getDocumentationStructure(): Promise<DocItem[]> {
  return buildStructure(DOCS_DIRECTORY);
}

function buildStructure(dirPath: string, relativePath: string = ''): DocItem[] {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const items = fs.readdirSync(dirPath);
  const structure: DocItem[] = [];

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    const itemRelativePath = path.join(relativePath, item);

    if (stat.isDirectory()) {
      const children = buildStructure(fullPath, itemRelativePath);
      if (children.length > 0) {
        // Try to get metadata from index/README (.md or .mdx)
        let metadata: MarkdownContent['data'] = {};
        const indexFiles = ['index.md', 'index.mdx', 'README.md', 'README.mdx'];

        for (const indexFile of indexFiles) {
          const indexPath = path.join(fullPath, indexFile);
          if (fs.existsSync(indexPath)) {
            try {
              const fileContent = fs.readFileSync(indexPath, 'utf-8');
              const { data } = matter(fileContent);
              metadata = data;
              break;
            } catch (error) {
              console.warn(`Failed to parse metadata from ${indexPath}:`, error);
            }
          }
        }

        const category = relativePath.split('/')[0] || item;

        // Check if this directory has an index file
        const hasIndex = indexFiles.some((indexFile) => fs.existsSync(path.join(fullPath, indexFile)));

        structure.push({
          name: item,
          type: 'directory',
          path: itemRelativePath,
          children,
          title: metadata.title || formatName(item),
          description: metadata.description,
          icon: resolveIcon(metadata.icon as string | undefined, 'directory', item, category),
          category,
          order: metadata.order || 0,
          badge: metadata.badge,
          isExternal: (metadata.isExternal as boolean) || false,
          externalUrl: metadata.externalUrl as string | undefined,
          hasIndex
        });
      }
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      // Skip certain files that are not meant for documentation
      // Also skip index.md/mdx and README.md/mdx as they represent directory content
      if (
        !item.startsWith('prompt.') &&
        !item.startsWith('response.') &&
        !item.includes('.not-good.') &&
        !['index.md', 'index.mdx', 'README.md', 'README.mdx'].includes(item)
      ) {
        try {
          const fileContent = fs.readFileSync(fullPath, 'utf-8');
          const { data } = matter(fileContent);
          const category = relativePath.split('/')[0] || 'general';

          structure.push({
            name: item.replace(/\.(md|mdx)$/i, ''),
            type: 'file',
            path: itemRelativePath.replace(/\.(md|mdx)$/i, ''),
            title: (data.title as string) || formatName(item.replace(/\.(md|mdx)$/i, '')),
            description: data.description as string | undefined,
            icon: resolveIcon(
              data.icon as string | undefined,
              'file',
              item.replace(/\.(md|mdx)$/i, ''),
              category
            ),
            category,
            order: (data.order as number) || 0,
            badge: data.badge as string | undefined,
            isExternal: (data.isExternal as boolean) || false,
            externalUrl: data.externalUrl as string | undefined
          });
        } catch (error) {
          console.warn(`Failed to parse metadata from ${fullPath}:`, error);
          // Fallback without metadata
          const category = relativePath.split('/')[0] || 'general';
          structure.push({
            name: item.replace(/\.(md|mdx)$/i, ''),
            type: 'file',
            path: itemRelativePath.replace(/\.(md|mdx)$/i, ''),
            title: formatName(item.replace(/\.(md|mdx)$/i, '')),
            icon: getDefaultIcon('file', item.replace(/\.(md|mdx)$/i, ''), category),
            category,
            order: 0
          });
        }
      }
    }
  }

  // Sort by order first, then by type, then by name
  return structure.sort((a, b) => {
    // First by order
    if (a.order !== b.order) {
      return (a.order || 0) - (b.order || 0);
    }
    // Then by type (directories first)
    if (a.type !== b.type) {
      return a.type === 'directory' ? -1 : 1;
    }
    // Finally by name
    return a.name.localeCompare(b.name);
  });
}

export function getDocPathFromSlug(slug: string[]): string {
  return slug.join('/');
}

export function getSlugFromPath(filePath: string): string[] {
  return filePath.split('/').filter(Boolean);
}

function formatName(name: string): string {
  // Convert kebab-case or snake_case to Title Case
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}
