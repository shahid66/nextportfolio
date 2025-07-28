// app/blog/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Road Bikes for Beginners in 2025",
    summary:
      "Looking to start your cycling journey? Check out our top picks for affordable, beginner-friendly road bikes.",
    image: "https://source.unsplash.com/400x250/?bike,road",
    link: "#",
  },
  {
    id: 2,
    title: "Essential Maintenance Tips for Long-lasting Bikes",
    summary:
      "Keep your ride smooth and safe with these essential maintenance tips every bike owner should know.",
    image: "https://source.unsplash.com/400x250/?bike,maintenance",
    link: "#",
  },
  {
    id: 3,
    title: "Choosing the Right Helmet for Your Ride",
    summary:
      "A helmet is your best safety companion. Learn how to choose one that fits your head and your style.",
    image: "https://source.unsplash.com/400x250/?bike,helmet",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">📰 Our Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Stay updated with the latest tips, guides, and updates from the world
          of biking.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.summary}</p>
              <Button variant="link" className="p-0 text-blue-600" asChild>
                <a href={post.link}>Read More →</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
