import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Search, ArrowRight, X, ChevronLeft, ChevronRight, Share2, Download, Newspaper, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Import blog images
import samaroh1 from "../assets/blog/Samaroh1.jpeg";
import samaroh2 from "../assets/blog/Samaroh2.jpeg";
import samaroh3 from "../assets/blog/Samaroh3.jpeg";
import samaroh5 from "../assets/blog/Samaroh5.jpeg";
import found1 from "../assets/blog/found1.jpeg";
import found2 from "../assets/blog/found2.jpeg";
import found3 from "../assets/blog/found3.jpeg";
import found4 from "../assets/blog/found4.jpeg";
import women1 from "../assets/blog/women1.jpeg";
import women2 from "../assets/blog/women2.jpeg";
import women3 from "../assets/blog/women3.jpeg";
import women4 from "../assets/blog/women4.jpeg";

// Import all 43 news cuttings
import news1 from "../assets/blog/news/news1.jpeg";
import news2 from "../assets/blog/news/news2.jpeg";
import news3 from "../assets/blog/news/news3.jpeg";
import news4 from "../assets/blog/news/news4.jpeg";
import news5 from "../assets/blog/news/news5.jpeg";
import news6 from "../assets/blog/news/news6.jpeg";
import news7 from "../assets/blog/news/news7.jpeg";
import news8 from "../assets/blog/news/news8.jpeg";
import news9 from "../assets/blog/news/news9.jpeg";
import news10 from "../assets/blog/news/news10.jpeg";
import news11 from "../assets/blog/news/news11.jpeg";
import news12 from "../assets/blog/news/news12.jpeg";
import news13 from "../assets/blog/news/news13.jpeg";
import news14 from "../assets/blog/news/news14.jpeg";
import news15 from "../assets/blog/news/news15.jpeg";
import news16 from "../assets/blog/news/news16.jpeg";
import news17 from "../assets/blog/news/news17.jpeg";


import news20 from "../assets/blog/news/news20.jpeg";
import news21 from "../assets/blog/news/news21.jpeg";
import news22 from "../assets/blog/news/news22.jpeg";
import news23 from "../assets/blog/news/news23.jpeg";
import news24 from "../assets/blog/news/news24.jpeg";
import news25 from "../assets/blog/news/news25.jpeg";
import news26 from "../assets/blog/news/news26.jpeg";
import news27 from "../assets/blog/news/news27.jpeg";
import news28 from "../assets/blog/news/news28.jpeg";
import news29 from "../assets/blog/news/news29.jpeg";
import news30 from "../assets/blog/news/news30.jpeg";
import news31 from "../assets/blog/news/news31.jpeg";
import news32 from "../assets/blog/news/news32.jpeg";
import news33 from "../assets/blog/news/news33.jpeg";




import news38 from "../assets/blog/news/news38.jpeg";
import news39 from "../assets/blog/news/news39.jpeg";
import news40 from "../assets/blog/news/news40.jpeg";
import news41 from "../assets/blog/news/news41.jpeg";
import news42 from "../assets/blog/news/news42.jpeg";
import news43 from "../assets/blog/news/news43.jpeg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showShareOptions, setShowShareOptions] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("blog");

  const categories = ["All", "Events", "Empowerment", "Culture"];

  // Blog Articles Data
  const articles = [
    {
      id: 1,
      title: "Celebrating a Commitment to Humanity: Foundation Day of the National Human Rights and Women Welfare Organisation",
      date: "July 5",
      excerpt: "The NHRWWO proudly celebrated its Foundation Day, reaffirming its mission to build a society free from crime, corruption, and injustice.",
      fullContent: `
        <h3>Celebrating a Commitment to Humanity</h3>
        <p>The National Human Rights and Women Welfare Organisation (NHRWWO) proudly celebrated its Foundation Day on July 5, marking yet another year of dedication towards justice, equality, and social welfare. The occasion served as a reminder of the organisation's noble mission — to protect human rights, support the poor and underprivileged, and build a society free from crime, corruption, and domestic violence.</p>
  
        <h4>A Day of Reflection and Renewal</h4>
        <p>The celebration brought together members, volunteers, and supporters from across the country, all united by a common purpose — to create a safer, fairer, and more compassionate society. The event began with a heartfelt welcome, followed by discussions on NHRWWO's achievements and initiatives, which continue to uplift the needy and spread awareness about human rights.</p>
  
        <h4>Words of Inspiration from the Leadership</h4>
        <p>Secretary <strong>Ms. Sonal Singh</strong> and President <strong>Mr. Sunil Kumar</strong> addressed the gathering, inspiring everyone to stay committed to the cause. Ms. Singh thanked the team for their dedication and reminded everyone that protecting citizens' rights is the soul of the organisation. Mr. Kumar emphasized unity and consistent action to eradicate corruption and violence.</p>
  
        <h4>Reaffirming the Mission</h4>
        <p>The celebration concluded with a renewed pledge to uphold justice, equality, and humanity. It served as both a celebration of achievements and a promise for a future where every citizen lives with dignity and security.</p>
  
        <h4>About the Organisation</h4>
        <p>The NHRWWO is a non-profit dedicated to promoting human rights, empowering women, and helping the underprivileged, with a vision to build a just and equal society.</p>
      `,
      category: "Events",
      author: "NHRWWO Team",
      image: women1,
      additionalImages: [
        women1,
        women2,
        women3,
        women4
      ],
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "Celebrating the Spirit of Womanhood: NHRWWO Observes International Women's Day",
      date: "March 8",
      venue: "NHRWWO Patna Office",
      excerpt: "Honouring women who inspire change, NHRWWO celebrated International Women's Day with great enthusiasm and pride.",
      fullContent: `
        <h3>Celebrating the Spirit of Womanhood</h3>
        <p>The National Human Rights and Women Welfare Organisation (NHRWWO) celebrated International Women's Day at its Patna office on March 8, honouring women who have made remarkable contributions in various fields — from law to education, journalism, medicine, and public service.</p>
  
        <h4>Honouring Women Who Inspire Change</h4>
        <p>Distinguished women like Ms. Rajkanta Raj, Ms. Sangeeta Singh, Dr. Priyanka Sinha, Dr. Madhuri Kumari, Ms. Babita Mishra, Ms. Pushpa Singh, and Ms. Premlata Singh were recognised for their outstanding efforts in empowering women and promoting human rights.</p>
  
        <h4>Words of Inspiration</h4>
        <p>Secretary <strong>Ms. Sonal Singh</strong> led the celebration, expressing admiration for women's resilience and strength: "Women are the backbone of a progressive nation. Their compassion drives social transformation." Her message inspired all attendees to continue supporting equality and empowerment.</p>
  
        <h4>A Celebration of Strength and Empowerment</h4>
        <p>The event featured cultural performances and discussions under the theme <em>"Empowered Women, Empower Society."</em> The day ended with a renewed commitment to protecting human rights and advancing gender equality.</p>
      `,
      category: "Empowerment",
      author: "NHRWWO Team",
      image: found1,
      additionalImages: [
        found1,
        found2,
        found3,
        found4
      ],
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Joy and Unity Mark Sawan Milan Samaroh Celebration at Patna",
      date: "August",
      excerpt: "NHRWWO celebrated the vibrant Sawan Milan Samaroh festival in Patna, highlighting unity, happiness, and togetherness.",
      fullContent: `
        <h3>Joy and Unity Mark Sawan Milan Samaroh Celebration at Patna</h3>
        <p>The National Human Rights and Women Welfare Organisation (NHRWWO) celebrated the colorful festival of <strong>Sawan Milan Samaroh</strong> at its Patna office, bringing together members and well-wishers from across regions. The event was filled with joy, music, and cultural unity.</p>
  
        <h4>Celebrating Togetherness and Culture</h4>
        <p>The festival included singing, dancing, and games that strengthened bonds among members. It was not just a cultural event but also a reaffirmation of collective dedication to the organisation's mission of service and justice.</p>
  
        <h4>Inspiring Words from the President</h4>
        <p>President <strong>Mr. Sunil Kumar</strong> addressed the gathering, emphasizing unity and compassion: "Our strength lies in our unity and dedication. Let us renew our promise to serve humanity and build a society free from injustice."</p>
  
        <h4>A Day Filled with Smiles and Spirit</h4>
        <p>The event concluded with group songs, dances, and the message — <em>"Together We Can Make a Difference."</em> It reflected the deep sense of belonging and shared purpose within the NHRWWO family.</p>
      `,
      category: "Culture",
      author: "NHRWWO Team",
      image: samaroh1,
      additionalImages: [
        samaroh2,
        samaroh3,
        samaroh5,
      ],
      readTime: "4 min read",
    },
  ];

  // Array of all 43 news cuttings
  const newsCuttings = [
    { id: 1, image: news1, category: "News", title: "" },
    { id: 2, image: news2, category: "News", title: "" },
    { id: 3, image: news3, category: "News", title: "" },
    { id: 4, image: news4, category: "News", title: "" },
    { id: 5, image: news5, category: "News", title: "" },
    { id: 6, image: news6, category: "News", title: "" },
    { id: 7, image: news7, category: "News", title: "" },
    { id: 8, image: news8, category: "News", title: "" },
    { id: 9, image: news9, category: "News", title: "" },
    { id: 10, image: news10, category: "News", title: "" },
    { id: 11, image: news11, category: "News", title: "" },
    { id: 12, image: news12, category: "News", title: "" },
    { id: 13, image: news13, category: "News", title: "" },
    { id: 14, image: news14, category: "News", title: "" },
    { id: 15, image: news15, category: "News", title: "" },
    { id: 16, image: news16, category: "News", title: "" },
    { id: 17, image: news17, category: "News", title: "" },


    { id: 20, image: news20, category: "News", title: "" },
    { id: 21, image: news21, category: "News", title: "" },
    { id: 22, image: news22, category: "News", title: "" },
    { id: 23, image: news23, category: "News", title: "" },
    { id: 24, image: news24, category: "News", title: "" },
    { id: 25, image: news25, category: "News", title: "" },
    { id: 26, image: news26, category: "News", title: "" },
    { id: 27, image: news27, category: "News", title: "" },
    { id: 28, image: news28, category: "News", title: "" },
    { id: 29, image: news29, category: "News", title: "" },
    { id: 30, image: news30, category: "News", title: "" },
    { id: 31, image: news31, category: "News", title: "" },
    { id: 32, image: news32, category: "News", title: "" },
    { id: 33, image: news33, category: "News", title: "" },




    { id: 38, image: news38, category: "News", title: "" },
    { id: 39, image: news39, category: "News", title: "" },
    { id: 40, image: news40, category: "News", title: "" },
    { id: 41, image: news41, category: "News", title: "" },
    { id: 42, image: news42, category: "News", title: "" },
    { id: 43, image: news43, category: "News", title: "" },
  ];

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = 
      selectedCategory === "all" || 
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = 
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.author && article.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Filter news based on search query
  const filteredNews = newsCuttings.filter((news) => {
    const matchesSearch = 
      searchQuery === "" ||
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const openArticleModal = (article: any) => {
    setSelectedArticle(article);
    setCurrentImageIndex(0);
    setShowShareOptions(false);
    document.body.style.overflow = "hidden";
  };

  const openNewsModal = (news: any) => {
    setSelectedNews(news);
    setCurrentImageIndex(0);
    setShowShareOptions(false);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedArticle(null);
    setSelectedNews(null);
    setShowShareOptions(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedArticle) {
      const allImages = getAllImages(selectedArticle);
      setCurrentImageIndex((prev) => 
        prev === allImages.length - 1 ? 0 : prev + 1
      );
    } else if (selectedNews) {
      setCurrentImageIndex((prev) => 
        prev === newsCuttings.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedArticle) {
      const allImages = getAllImages(selectedArticle);
      setCurrentImageIndex((prev) => 
        prev === 0 ? allImages.length - 1 : prev - 1
      );
    } else if (selectedNews) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? newsCuttings.length - 1 : prev - 1
      );
    }
  };

  // Helper function to get all images safely
  const getAllImages = (article: any) => {
    return [article.image, ...(article.additionalImages || [])];
  };

  // Share functionality for articles
  const shareArticle = async (platform: string) => {
    if (!selectedArticle) return;

    const articleUrl = `${window.location.origin}/blog/article/${selectedArticle.id}`;
    const text = `Check out this article: ${selectedArticle.title}`;
    
    shareContent(platform, articleUrl, text);
  };

  // Share functionality for news
  const shareNews = async (platform: string) => {
    if (!selectedNews) return;

    const newsUrl = `${window.location.origin}/blog/news/${selectedNews.id}`;
    const text = `Check out this news cutting: ${selectedNews.title}`;
    
    shareContent(platform, newsUrl, text);
  };

  const shareContent = async (platform: string, url: string, text: string) => {
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
        } catch (err) {
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('Link copied to clipboard!');
        }
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(selectedArticle?.title || selectedNews?.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`, '_blank');
        break;
    }
    
    setShowShareOptions(false);
  };

  // Download PDF functionality
  const downloadPDF = async () => {
    const content = selectedArticle || selectedNews;
    if (!content) return;

    try {
      const pdfContent = document.createElement('div');
      pdfContent.style.padding = '20px';
      pdfContent.style.backgroundColor = 'white';
      pdfContent.style.color = 'black';
      pdfContent.style.maxWidth = '800px';
      pdfContent.style.margin = '0 auto';
      pdfContent.style.fontFamily = 'Arial, sans-serif';
      
      const isArticle = !!selectedArticle;
      const allImages = isArticle ? getAllImages(content) : [content.image];
      const currentImage = allImages[currentImageIndex] || content.image;
      
      pdfContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #e53e3e; padding-bottom: 20px;">
          <h1 style="color: #e53e3e; font-size: 28px; margin-bottom: 10px;">National Human Rights and Women Welfare Organisation</h1>
          <h2 style="font-size: 24px; margin-bottom: 20px; line-height: 1.3;">${content.title}</h2>
          <div style="display: flex; justify-content: center; gap: 20px; font-size: 14px; color: #666; flex-wrap: wrap;">
            ${isArticle ? `
              <span><strong>Author:</strong> ${content.author || 'NHRWWO Team'}</span>
              <span><strong>Date:</strong> ${content.date}</span>
            ` : ''}
            <span><strong>Category:</strong> ${content.category}</span>
            ${isArticle ? `<span><strong>Read Time:</strong> ${content.readTime}</span>` : ''}
          </div>
        </div>
        ${currentImage ? `
        <div style="margin-bottom: 20px; text-align: center;">
          <img src="${currentImage}" 
               alt="${content.title}" 
               style="max-width: 100%; max-height: ${isArticle ? '300px' : '600px'}; object-fit: contain; border-radius: 8px;" 
               onerror="this.style.display='none'"/>
        </div>
        ` : ''}
        ${isArticle ? `
        <div style="font-size: 16px; line-height: 1.6;">
          ${content.fullContent}
        </div>
        ` : `
        <div style="text-align: center; font-size: 16px; color: #666; margin-top: 20px;">
          <p>This is a newspaper cutting from our media coverage archive.</p>
          <p>News Cutting ID: #${content.id}</p>
        </div>
        `}
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; text-align: center; color: #666; font-size: 12px;">
          <p>Generated from National Human Rights and Women Welfare Organisation ${isArticle ? 'Blog' : 'News Archive'}</p>
          <p>${window.location.origin}</p>
          <p>Downloaded on: ${new Date().toLocaleDateString()}</p>
        </div>
      `;

      document.body.appendChild(pdfContent);

      const canvas = await html2canvas(pdfContent, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      document.body.removeChild(pdfContent);

      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${content.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      downloadSimplePDF();
    }
  };

  const downloadSimplePDF = () => {
    const content = selectedArticle || selectedNews;
    if (!content) return;

    const pdf = new jsPDF();
    const isArticle = !!selectedArticle;
    
    pdf.setProperties({
      title: content.title,
      subject: `${isArticle ? 'Article' : 'News Cutting'} from National Human Rights and Women Welfare Organisation`,
      author: content.author || 'NHRWWO Team',
    });

    pdf.setFontSize(20);
    pdf.setTextColor(229, 62, 62);
    pdf.text('National Human Rights and Women Welfare Organisation', 15, 20);
    
    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);
    const titleLines = pdf.splitTextToSize(content.title, 180);
    pdf.text(titleLines, 15, 40);
    
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    const metaText = isArticle 
      ? `Author: ${content.author || 'NHRWWO Team'} | Date: ${content.date} | Category: ${content.category}`
      : `Category: ${content.category} | ID: #${content.id}`;
    pdf.text(metaText, 15, 60);
    
    if (isArticle) {
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      const excerptLines = pdf.splitTextToSize(content.excerpt, 180);
      pdf.text(excerptLines, 15, 75);
    } else {
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Newspaper cutting from our media coverage archive.', 15, 75);
    }
    
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text(`Generated from ${window.location.origin} - ${new Date().toLocaleDateString()}`, 15, 280);
    
    pdf.save(`${content.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              News & Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Stay updated with our latest articles, news cuttings, events, and impact reports.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles and news..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-sm text-muted-foreground mt-2 text-left">
                  Found {activeTab === 'blog' ? filteredArticles.length : filteredNews.length} {activeTab === 'blog' ? 'article' : 'news cutting'}{activeTab === 'blog' ? (filteredArticles.length !== 1 ? 's' : '') : (filteredNews.length !== 1 ? 's' : '')} for "{searchQuery}"
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-background border-b sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Blog Articles
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="h-4 w-4" />
                News Cuttings ({newsCuttings.length})
              </TabsTrigger>
            </TabsList>

            {/* Blog Articles Tab */}
            <TabsContent value="blog" className="mt-8">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                    onClick={() => {
                      setSelectedCategory(category.toLowerCase());
                      setSearchQuery("");
                    }}
                    className={
                      selectedCategory === category.toLowerCase()
                        ? "bg-primary hover:bg-primary-hover text-primary-foreground"
                        : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="py-8 bg-background">
                <div className="container mx-auto px-4">
                  {filteredArticles.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-muted-foreground mb-4">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("all");
                        }}
                      >
                        Clear all filters
                      </Button>
                    </div>
                  ) : (
                    <>
                      {/* Featured Article */}
                      {!searchQuery && filteredArticles.length > 0 && (
                        <Card 
                          className="mb-12 overflow-hidden hover:shadow-xl transition-shadow animate-fade-in cursor-pointer"
                          onClick={() => openArticleModal(filteredArticles[0])}
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-[400px]">
                              <img
                                src={filteredArticles[0].image}
                                alt={filteredArticles[0].title}
                                className="w-full h-full object-cover"
                              />
                              <Badge className="absolute top-4 left-4 bg-primary">{filteredArticles[0].category}</Badge>
                            </div>
                            <CardContent className="p-8 flex flex-col justify-center">
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {filteredArticles[0].date}
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  {filteredArticles[0].author || 'NHRWWO Team'}
                                </div>
                                <span>{filteredArticles[0].readTime}</span>
                              </div>
                              <h2 className="text-3xl font-bold text-foreground mb-4">{filteredArticles[0].title}</h2>
                              <p className="text-muted-foreground mb-6 leading-relaxed">{filteredArticles[0].excerpt}</p>
                              <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground w-fit">
                                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </CardContent>
                          </div>
                        </Card>
                      )}

                      {/* Articles Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(searchQuery ? filteredArticles : filteredArticles.slice(1)).map((article, index) => (
                          <Card
                            key={article.id}
                            className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in-up cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => openArticleModal(article)}
                          >
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <Badge className="absolute top-4 left-4 bg-primary">{article.category}</Badge>
                            </div>
                            <CardContent className="p-6">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {article.date}
                                </div>
                                <span>•</span>
                                <span>{article.readTime}</span>
                              </div>
                              <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <User className="h-4 w-4" />
                                  {article.author || 'NHRWWO Team'}
                                </div>
                                <Button variant="link" className="text-primary p-0 group-hover:gap-2 transition-all">
                                  Read More <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* News Cuttings Tab */}
            <TabsContent value="news" className="mt-8">
              <div className="py-8 bg-background">
                <div className="container mx-auto px-4">
                  {filteredNews.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="text-muted-foreground mb-4">
                        <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-semibold mb-2">No news cuttings found</h3>
                        <p>Try adjusting your search criteria</p>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSearchQuery("");
                        }}
                      >
                        Clear search
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredNews.map((news, index) => (
                        <Card
                          key={news.id}
                          className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in-up cursor-pointer border-2 hover:border-primary/50"
                          style={{ animationDelay: `${index * 0.05}s` }}
                          onClick={() => openNewsModal(news)}
                        >
                          <div className="relative h-64 overflow-hidden bg-gray-100">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                            />
                            <Badge className="absolute top-3 left-3 bg-primary/90">{news.category}</Badge>
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              #{news.id}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                              {news.title}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>Click to view</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Total Count */}
                  {!searchQuery && (
                    <div className="text-center mt-12 pt-8 border-t">
                      <p className="text-muted-foreground">
                        Showing all {newsCuttings.length} news cuttings from our archive
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-background rounded-lg max-w-6xl max-h-[90vh] w-full overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                {/* Image Gallery */}
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <div className="relative h-96 bg-muted">
                    <img
                      src={getAllImages(selectedArticle)[currentImageIndex]}
                      alt={`${selectedArticle.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    {getAllImages(selectedArticle).length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-black/50 hover:bg-black/70 text-white"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-black/50 hover:bg-black/70 text-white"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {getAllImages(selectedArticle).length}
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  {getAllImages(selectedArticle).length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto py-2">
                      {getAllImages(selectedArticle).map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 ${
                            currentImageIndex === index ? "border-primary" : "border-transparent"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {selectedArticle.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {selectedArticle.author || 'NHRWWO Team'}
                  </div>
                  <Badge variant="secondary">{selectedArticle.category}</Badge>
                  <span>{selectedArticle.readTime}</span>
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-6 bg-muted/50">
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={closeModal}>
                  Close
                </Button>
                <div className="flex gap-2 relative">
                  {/* Share Button with Dropdown */}
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    
                    {showShareOptions && (
                      <div className="absolute bottom-full right-0 mb-2 w-48 bg-background border rounded-lg shadow-lg z-10">
                        <div className="p-2">
                          <button
                            onClick={() => shareArticle('twitter')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Twitter
                          </button>
                          <button
                            onClick={() => shareArticle('facebook')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Facebook
                          </button>
                          <button
                            onClick={() => shareArticle('linkedin')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            LinkedIn
                          </button>
                          <button
                            onClick={() => shareArticle('whatsapp')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            WhatsApp
                          </button>
                          <button
                            onClick={() => shareArticle('email')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Email
                          </button>
                          <button
                            onClick={() => shareArticle('copy')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Copy Link
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Download PDF Button */}
                  <Button 
                    onClick={downloadPDF}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News Cutting Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-background rounded-lg max-w-6xl max-h-[90vh] w-full overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
                <p className="text-muted-foreground mt-1">News Cutting #{selectedNews.id}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                {/* Image Display */}
                <div className="relative mb-6 rounded-lg overflow-hidden bg-gray-50">
                  <div className="flex items-center justify-center min-h-[500px] p-8">
                    <img
                      src={selectedNews.image}
                      alt={selectedNews.title}
                      className="max-w-full max-h-[500px] object-contain shadow-lg rounded"
                    />
                  </div>
                </div>

                {/* News Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 justify-center">
                  <Badge variant="secondary">{selectedNews.category}</Badge>
                  <span>ID: #{selectedNews.id}</span>
                  <span>•</span>
                  <span>From NHRWWO News Archive</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-6 bg-muted/50">
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={closeModal}>
                  Close
                </Button>
                <div className="flex gap-2 relative">
                  {/* Share Button with Dropdown */}
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                    
                    {showShareOptions && (
                      <div className="absolute bottom-full right-0 mb-2 w-48 bg-background border rounded-lg shadow-lg z-10">
                        <div className="p-2">
                          <button
                            onClick={() => shareNews('twitter')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Twitter
                          </button>
                          <button
                            onClick={() => shareNews('facebook')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Facebook
                          </button>
                          <button
                            onClick={() => shareNews('linkedin')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            LinkedIn
                          </button>
                          <button
                            onClick={() => shareNews('whatsapp')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            WhatsApp
                          </button>
                          <button
                            onClick={() => shareNews('email')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Email
                          </button>
                          <button
                            onClick={() => shareNews('copy')}
                            className="w-full text-left px-3 py-2 hover:bg-muted rounded-md flex items-center gap-2"
                          >
                            Copy Link
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Download PDF Button */}
                  <Button 
                    onClick={downloadPDF}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;