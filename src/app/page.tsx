'use client';

import { contentParts } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-8">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-semibold">Understanding Faith</h1>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Understanding Faith
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A calm and respectful exploration of faith, understanding, and truth. <br />
              And a negligible invitation to Islam.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="/part/part-01">
                <Button size="lg">
                  Start Reading
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <Separator className="mb-12" />

          {/* Parts Grid */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-8">Table of Contents</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {contentParts.map((part, index) => (
                <Link key={part.id} href={`/part/${part.id}`}>
                  <Card className="cursor-pointer transition-all hover:bg-accent/50 hover:shadow-md h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{part.title}</CardTitle>
                          <CardDescription>{part.description}</CardDescription>
                        </div>
                        <span className="text-sm text-muted-foreground ml-4 shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>A calm and respectful exploration</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
