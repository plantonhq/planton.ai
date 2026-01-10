import { Button, Link } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-[100%] text-white overflow-hidden">
      <main className="relative h-[80%]">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90">
          <div className="absolute inset-0 bg-black/50" />
          {/* Video placeholder - you can replace this with actual video */}
          <div className="absolute inset-0 bg-[#111] opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
          {/* Announcement Bar */}
          {/* <div className="flex justify-center mb-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#0E8BFF] bg-[rgba(21,137,254,0.13)] text-[#29B6F6] p-2.5 rounded-full hover:bg-[rgba(13,71,161,0.4)] transition-colors"
          >
            <Image
              src="/images/plantora.gif"
              alt="Plantora"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#07F] from-2.25% via-[#33C2FF] via-28.08% to-[#A6DDFF] to-100%">
              Introducing Plantora - Your Copilot for DevOps
            </span>
            <span className="ml-2">→</span>
          </a>
        </div> */}

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#0E8BFF] bg-[rgba(21,137,254,0.13)] text-[#29B6F6] p-2.5 rounded-full hover:bg-[rgba(13,71,161,0.4)] transition-colors"
            >
              <Image
                src="/images/plantora.gif"
                alt="Plantora"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#07F] from-2.25% via-[#33C2FF] via-28.08% to-[#A6DDFF] to-100%">
                Introducing Plantora - Your Copilot for DevOps
              </span>
              <span className="ml-2">→</span>
            </a>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Conversational
              <br />
              DevOps is The Future.
              <br />
              The Future is Here.
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Transforming DevOps Workflows Through AI-Driven Conversations
            </p>
            <div className="flex items-center gap-4">
              <Button
                className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                LinkComponent={Link}
                href="https://console.planton.ai"
                target="_self"
              >
                Get Started for Free
              </Button>
              <Button
                className="bg-transparent text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
                LinkComponent={Link}
                href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
                target="_self"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <main className="relative h-[80%]">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90">
          <div className="absolute inset-0 bg-black/50" />
          {/* Video placeholder - you can replace this with actual video */}
          <div className="absolute inset-0 bg-[#111] opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
          {/* Announcement Bar */}
          {/* <div className="flex justify-center mb-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-[#0E8BFF] bg-[rgba(21,137,254,0.13)] text-[#29B6F6] p-2.5 rounded-full hover:bg-[rgba(13,71,161,0.4)] transition-colors"
          >
            <Image
              src="/images/plantora.gif"
              alt="Plantora"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#07F] from-2.25% via-[#33C2FF] via-28.08% to-[#A6DDFF] to-100%">
              Introducing Plantora - Your Copilot for DevOps
            </span>
            <span className="ml-2">→</span>
          </a>
        </div> */}

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#0E8BFF] bg-[rgba(21,137,254,0.13)] text-[#29B6F6] p-2.5 rounded-full hover:bg-[rgba(13,71,161,0.4)] transition-colors"
            >
              <Image
                src="/images/plantora.gif"
                alt="Plantora"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#07F] from-2.25% via-[#33C2FF] via-28.08% to-[#A6DDFF] to-100%">
                Introducing Plantora - Your Copilot for DevOps
              </span>
              <span className="ml-2">→</span>
            </a>
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Conversational
              <br />
              DevOps is The Future.
              <br />
              The Future is Here.
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Transforming DevOps Workflows Through AI-Driven Conversations
            </p>
            <div className="flex items-center gap-4">
              <Button
                className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                LinkComponent={Link}
                href="https://console.planton.ai"
                target="_self"
              >
                Get Started for Free
              </Button>
              <Button
                className="bg-transparent text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
                LinkComponent={Link}
                href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
                target="_self"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
