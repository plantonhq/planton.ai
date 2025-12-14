'use client';

import { Box, Stack, Button, Typography, Link } from '@mui/material';
import { PageSection } from '@/components/landing-page';

export const CTASection = () => {
  return (
    <PageSection className="py-32 bg-black">
      <Stack className="max-w-7xl mx-auto items-center px-4">
        {/* Main CTA Card */}
        <Stack
          className="w-full py-20 px-8 md:px-16 rounded-[40px] items-center justify-center text-center relative overflow-hidden"
          sx={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(236, 72, 153, 0.15) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Background Effects */}
          <Box
            className="absolute top-0 left-1/4 w-96 h-96 filter blur-[120px] opacity-50"
            sx={{
              backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            }}
          />
          <Box
            className="absolute bottom-0 right-1/4 w-96 h-96 filter blur-[120px] opacity-50"
            sx={{
              backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
            }}
          />

          {/* Content */}
          <Stack className="gap-10 items-center relative z-10 max-w-4xl">
            <Stack className="gap-6">
              <Typography
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight"
              >
                Ready to Transform Your DevOps?
              </Typography>
              <Typography fontSize={20} className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Join organizations using specialized AI agents to accelerate infrastructure work, eliminate bottlenecks, and democratize DevOps expertise.
              </Typography>
            </Stack>

            <Stack className="flex-col sm:flex-row gap-4 items-center">
              <Button
                className="px-10 py-5 bg-white text-black font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-xl shadow-white/10"
                LinkComponent={Link}
                href="https://console.planton.cloud"
                target="_self"
              >
                Start with Agents
              </Button>
              <Button
                className="px-10 py-5 bg-white/10 text-white font-medium text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
                LinkComponent={Link}
                href="https://share.hsforms.com/2trKElpQ2R7-aR1f916tY7gpxl8x"
                target="_self"
              >
                Book a Demo
              </Button>
            </Stack>

            {/* Stats */}
            <Stack className="flex-row gap-8 md:gap-16 mt-8 pt-8 border-t border-white/10">
              <Box className="text-center">
                <Typography className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  19+
                </Typography>
                <Typography fontSize={14} className="text-gray-500 mt-1">
                  Specialized Agents
                </Typography>
              </Box>
              <Box className="text-center">
                <Typography className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  10x
                </Typography>
                <Typography fontSize={14} className="text-gray-500 mt-1">
                  Faster Resolution
                </Typography>
              </Box>
              <Box className="text-center">
                <Typography className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  24/7
                </Typography>
                <Typography fontSize={14} className="text-gray-500 mt-1">
                  Always Available
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        {/* Secondary Links */}
        <Stack className="flex-col md:flex-row gap-8 md:gap-16 mt-16 text-center">
          <Box>
            <Typography fontSize={15} className="text-gray-500 mb-2">
              Want to build your own agents?
            </Typography>
            <Link
              href="https://github.com/plantoncloud/graphton"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 text-base font-medium transition-colors"
            >
              Explore Graphton Framework -&gt;
            </Link>
          </Box>
          <Box className="hidden md:block w-px bg-white/10" />
          <Box>
            <Typography fontSize={15} className="text-gray-500 mb-2">
              Questions about Agents?
            </Typography>
            <Link
              href="mailto:hello@planton.cloud"
              className="text-blue-400 hover:text-blue-300 text-base font-medium transition-colors"
            >
              Contact Our Team -&gt;
            </Link>
          </Box>
        </Stack>
      </Stack>
    </PageSection>
  );
};

