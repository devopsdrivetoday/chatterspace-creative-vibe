
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Users, Zap, Shield, Smile, Star, ThumbsUp } from "lucide-react";

const Index = () => {
  const [selectedLogo, setSelectedLogo] = useState(0);
  const [likedTaglines, setLikedTaglines] = useState<number[]>([]);

  const logoVariants = [
    { name: "Bubble Chat", icon: "💬", style: "rounded-full bg-gradient-to-br from-blue-500 to-purple-600" },
    { name: "Connected Dots", icon: "⚡", style: "rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" },
    { name: "Heart Space", icon: "💝", style: "rounded-full bg-gradient-to-br from-pink-500 to-orange-400" },
    { name: "Wave Connect", icon: "🌊", style: "rounded-lg bg-gradient-to-br from-blue-400 to-teal-500" }
  ];

  const colorThemes = [
    { name: "Vibrant Blue", primary: "from-blue-500 to-purple-600", accent: "from-pink-400 to-red-400" },
    { name: "Purple Dream", primary: "from-purple-500 to-pink-500", accent: "from-orange-400 to-yellow-400" },
    { name: "Ocean Fresh", primary: "from-teal-400 to-blue-500", accent: "from-green-400 to-teal-400" },
    { name: "Sunset Glow", primary: "from-orange-400 to-pink-500", accent: "from-purple-400 to-blue-400" }
  ];

  const taglines = [
    "Where real connections happen ✨",
    "Your space, your friends, your story 💫",
    "Connect authentically, chat meaningfully 🌟",
    "Building friendships, one chat at a time 💝",
    "Real conversations, real friends 🔥",
    "Where every voice matters 🎯"
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Friend Discovery",
      description: "Find friends through mutual connections and shared interests"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Everything",
      description: "Instant posts, live reactions, and seamless conversations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Complete control over who sees your content and data"
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Rich Reactions",
      description: "Express yourself with custom emojis and animated reactions"
    }
  ];

  const toggleLike = (index: number) => {
    setLikedTaglines(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-2xl">💬</span>
              <span className="font-bold text-xl">ChatterSpace</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Social Media<br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              A fresh take on social networking for the next generation who value authentic connections and meaningful conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
                Explore Brand
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6 rounded-full">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 space-y-20">
        {/* Logo Concepts */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Logo Concepts</h2>
            <p className="text-xl text-gray-600">Modern, playful, and memorable brand identities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logoVariants.map((logo, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedLogo === index ? 'ring-4 ring-blue-500 shadow-xl' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedLogo(index)}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-20 h-20 mx-auto flex items-center justify-center text-3xl text-white ${logo.style} transition-transform hover:rotate-12`}>
                    {logo.icon}
                  </div>
                  <h3 className="font-bold text-lg">{logo.name}</h3>
                  <Badge variant={selectedLogo === index ? "default" : "secondary"}>
                    {selectedLogo === index ? "Selected" : "Preview"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Color Themes */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Color Themes</h2>
            <p className="text-xl text-gray-600">Vibrant palettes that capture youthful energy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorThemes.map((theme, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-32 bg-gradient-to-br ${theme.primary}`}></div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{theme.name}</h3>
                  <div className="flex space-x-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.primary} ring-2 ring-gray-200`}></div>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.accent} ring-2 ring-gray-200`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tagline Voting */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Tagline Options</h2>
            <p className="text-xl text-gray-600">Vote for your favorite brand message</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {taglines.map((tagline, index) => (
              <Card 
                key={index} 
                className="cursor-pointer transition-all hover:shadow-lg"
                onClick={() => toggleLike(index)}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <p className="text-lg font-medium">{tagline}</p>
                  <Button 
                    variant={likedTaglines.includes(index) ? "default" : "outline"}
                    size="sm"
                    className="transition-all"
                  >
                    <Heart className={`w-4 h-4 mr-2 ${likedTaglines.includes(index) ? 'fill-current' : ''}`} />
                    {likedTaglines.includes(index) ? 'Loved!' : 'Love it'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Core Features</h2>
            <p className="text-xl text-gray-600">What makes ChatterSpace special</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sample Post UI */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Interface Preview</h2>
            <p className="text-xl text-gray-600">Clean, modern, and user-friendly design</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">👋</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Alex Chen</h3>
                    <p className="text-sm text-blue-100">2 minutes ago</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-800">
                  Just had the most amazing coffee at this local café! ☕ 
                  The community here is so welcoming. Love discovering new places with friends! 
                  <span className="text-blue-600">#LocalGems #CoffeeLovers</span>
                </p>
                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center text-gray-500">
                  📸 Photo placeholder
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <Button variant="ghost" size="sm" className="space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>24</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>8</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Brand Values */}
        <section className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center space-y-8">
          <h2 className="text-4xl font-bold">Our Brand Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="text-4xl">🌟</div>
              <h3 className="text-xl font-bold">Authentic</h3>
              <p className="text-purple-100">Real connections, genuine conversations, authentic experiences</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-bold">Innovative</h3>
              <p className="text-purple-100">Cutting-edge features that enhance how people connect</p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🤝</div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-purple-100">Building bridges, fostering friendships, creating belonging</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
