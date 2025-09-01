'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, className = '' }) => {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply additional dark theme styles to the SVG after it's rendered
  useEffect(() => {
    if (containerRef.current && svg) {
      const svgElement = containerRef.current.querySelector('svg');
      if (svgElement) {
        // Set SVG background and size constraints
        svgElement.style.backgroundColor = '#1f2937';
        svgElement.style.maxWidth = '100%';
        svgElement.style.height = 'auto';
        
        // Scale down large diagrams
        const originalWidth = svgElement.getAttribute('width');
        const originalHeight = svgElement.getAttribute('height');
        
        if (originalWidth && parseInt(originalWidth) > 800) {
          svgElement.style.transform = 'scale(0.8)';
          svgElement.style.transformOrigin = 'top left';
        }
        
        // Apply dark theme styles to various elements
        const selectors = [
          { selector: '.node rect, .node circle, .node ellipse, .node polygon', styles: { fill: '#374151', stroke: '#60a5fa', strokeWidth: '1px' } },
          { selector: '.node .label, text', styles: { fill: '#f3f4f6', fontSize: '12px' } },
          { selector: '.edgeLabel rect', styles: { fill: '#374151' } },
          { selector: '.edgeLabel text', styles: { fill: '#f3f4f6', fontSize: '11px' } },
          { selector: '.cluster rect', styles: { fill: '#1f2937', stroke: '#4b5563' } },
          { selector: 'path.path', styles: { stroke: '#9ca3af', strokeWidth: '1px' } },
          { selector: '.flowchart-link', styles: { stroke: '#9ca3af', strokeWidth: '1px' } },
          { selector: '.actor', styles: { fill: '#374151', stroke: '#60a5fa' } },
          { selector: '.actor-line', styles: { stroke: '#9ca3af' } },
          { selector: '.messageLine0, .messageLine1', styles: { stroke: '#9ca3af' } },
        ];
        
        selectors.forEach(({ selector, styles }) => {
          const elements = svgElement.querySelectorAll(selector);
          elements.forEach((el: any) => {
            Object.assign(el.style, styles);
          });
        });
      }
    }
  }, [svg]);

  useEffect(() => {
    let mounted = true;

    const renderDiagram = async () => {
      try {
        setIsLoading(true);
        setError('');

        // Initialize mermaid with dark theme configuration
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            darkMode: true,
            background: '#1f2937',
            primaryColor: '#60a5fa',
            primaryTextColor: '#f3f4f6',
            primaryBorderColor: '#4b5563',
            lineColor: '#9ca3af',
            secondaryColor: '#374151',
            tertiaryColor: '#111827',
            fontSize: '12px',
            // Flowchart specific
            mainBkg: '#374151',
            secondBkg: '#4b5563',
            // Node colors
            secondaryTextColor: '#d1d5db',
            tertiaryTextColor: '#9ca3af',
            // Edge colors
            edgeLabelBackground: '#374151',
            // Class diagram
            classText: '#f3f4f6',
            // Sequence diagram
            actorBkg: '#374151',
            actorBorder: '#60a5fa',
            actorTextColor: '#f3f4f6',
            actorLineColor: '#9ca3af',
            signalColor: '#f3f4f6',
            signalTextColor: '#f3f4f6',
            messageLine0: '#9ca3af',
            messageLine1: '#9ca3af',
            // Git graph
            git0: '#ef4444',
            git1: '#22c55e',
            git2: '#3b82f6',
            git3: '#f59e0b',
            git4: '#8b5cf6',
            git5: '#ec4899',
            git6: '#06b6d4',
            git7: '#84cc16',
            gitBranchLabel0: '#f3f4f6',
            gitBranchLabel1: '#f3f4f6',
            gitBranchLabel2: '#f3f4f6',
            gitBranchLabel3: '#f3f4f6',
            gitBranchLabel4: '#f3f4f6',
            gitBranchLabel5: '#f3f4f6',
            gitBranchLabel6: '#f3f4f6',
            gitBranchLabel7: '#f3f4f6',
            // Pie chart
            pie1: '#ef4444',
            pie2: '#f59e0b',
            pie3: '#22c55e',
            pie4: '#3b82f6',
            pie5: '#8b5cf6',
            pie6: '#ec4899',
            pie7: '#06b6d4',
            pie8: '#84cc16',
            pieTitleTextSize: '14px',
            pieTitleTextColor: '#f3f4f6',
            pieSectionTextSize: '11px',
            pieSectionTextColor: '#f3f4f6',
            pieLegendTextSize: '11px',
            pieLegendTextColor: '#f3f4f6',
          },
          fontFamily: 'system-ui, -apple-system, sans-serif',
          flowchart: {
            useMaxWidth: false,
            htmlLabels: true,
            curve: 'basis',
            padding: 10,
            nodeSpacing: 50,
            rankSpacing: 50,
          },
          sequence: {
            useMaxWidth: false,
            showSequenceNumbers: true,
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
          },
          gantt: {
            useMaxWidth: false,
            leftPadding: 75,
            gridLineStartPadding: 35,
            fontSize: 11,
          },
          journey: {
            useMaxWidth: false,
            diagramMarginX: 50,
            diagramMarginY: 10,
          },
          timeline: {
            useMaxWidth: false,
            padding: 5,
          },
          gitGraph: {
            useMaxWidth: false,
            mainBranchName: 'main',
            showBranches: true,
            showCommitLabel: true,
            rotateCommitLabel: true,
          },
          er: {
            useMaxWidth: false,
            diagramPadding: 20,
            layoutDirection: 'TB',
            minEntityWidth: 100,
            minEntityHeight: 75,
            entityPadding: 15,
            stroke: 'gray',
            fill: 'honeydew',
            fontSize: 12,
          },
          pie: {
            useMaxWidth: false,
            textPosition: 0.75,
          },
          quadrantChart: {
            useMaxWidth: false,
            chartWidth: 500,
            chartHeight: 400,
          },
          xyChart: {
            useMaxWidth: false,
            width: 700,
            height: 500,
          },
          requirement: {
            useMaxWidth: false,
            rect_fill: '#f9f9f9',
            text_color: '#333',
            rect_border_size: '0.5px',
            rect_border_color: '#bbb',
            rect_min_width: 200,
            rect_min_height: 200,
            fontSize: 14,
          },
        });

        // Generate unique ID for this diagram
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

        // Render the diagram
        const { svg: renderedSvg } = await mermaid.render(id, chart.trim());

        if (mounted) {
          setSvg(renderedSvg);
          setError('');
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
          setSvg('');
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    renderDiagram();

    return () => {
      mounted = false;
    };
  }, [chart]);

  if (isLoading) {
    return (
      <div className={`my-6 p-4 bg-gray-800 rounded-lg border border-gray-700 ${className}`}>
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          <span className="ml-3 text-gray-400">Rendering diagram...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`my-6 p-4 bg-red-900/20 rounded-lg border border-red-700 ${className}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-400">Mermaid Diagram Error</h3>
            <div className="mt-2 text-sm text-red-300">
              <p>{error}</p>
            </div>
            <details className="mt-3">
              <summary className="text-xs text-red-400 cursor-pointer hover:text-red-300">
                Show diagram source
              </summary>
              <pre className="mt-2 text-xs text-red-200 bg-red-900/10 p-2 rounded border border-red-800 overflow-x-auto">
                {chart}
              </pre>
            </details>
          </div>
        </div>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={`my-6 p-4 bg-gray-800 rounded-lg border border-gray-700 ${className}`}>
        <div className="text-gray-400 text-center">No diagram to display</div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`my-6 p-4 bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto ${className}`}
    >
      <div 
        className="mermaid-diagram flex justify-center"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
};

export default MermaidDiagram;
