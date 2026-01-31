'use client';

import { useState } from 'react';
import { Response } from '@/components/markdown-renderer';
import { contentParts } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PartPage() {
  const params = useParams();
  const router = useRouter();
  const partId = params.id as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentIndex = contentParts.findIndex(p => p.id === partId);
  const currentContent = contentParts.find(p => p.id === partId);

  const handleNext = () => {
    if (currentIndex < contentParts.length - 1) {
      router.push(`/part/${contentParts[currentIndex + 1].id}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      router.push(`/part/${contentParts[currentIndex - 1].id}`);
    }
  };

  if (!currentContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Part not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
              <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Understanding Faith"
                width={32}
                height={32}
                className="rounded"
              />
              <h1 className="text-lg font-semibold">Understanding Faith</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span>{currentContent.title}</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 transform border-r bg-background transition-transform duration-200 ease-in-out md:sticky md:translate-x-0 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-full overflow-y-auto p-4">
            <div className="space-y-2">
              <h2 className="mb-4 px-2 text-sm font-semibold text-muted-foreground">
                Table of Contents
              </h2>
              {contentParts.map((part) => (
                <Link key={part.id} href={`/part/${part.id}`}>
                  <Button
                    variant={partId === part.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start text-left"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="truncate">{part.title}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
            <div className="space-y-6">
              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Index
                  </Button>
                </Link>
                <ButtonGroup>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentIndex <= 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentIndex >= contentParts.length - 1}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </ButtonGroup>
              </div>

              <Separator />

              {/* Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{currentContent.title}</CardTitle>
                  <CardDescription>{currentContent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-slate max-w-none dark:prose-invert">
                    <Response>{currentContent.content}</Response>
                  </div>
                </CardContent>
              </Card>

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentIndex <= 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Part {currentIndex + 1} of {contentParts.length}
                </span>
                <Button
                  variant="outline"
                  onClick={handleNext}
                  disabled={currentIndex >= contentParts.length - 1}
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
