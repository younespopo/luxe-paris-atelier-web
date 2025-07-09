import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Tag,
  FileText,
  Settings,
  TrendingUp,
  Eye,
  Euro,
  Plus,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Données simulées pour le dashboard
  const stats = {
    totalSales: "45,231",
    totalOrders: "156",
    totalCustomers: "1,234",
    conversionRate: "3.2%"
  };

  const recentOrders = [
    { id: "#ORD-001", customer: "Marie Dubois", amount: "€850", status: "En cours", date: "2025-01-09" },
    { id: "#ORD-002", customer: "Pierre Martin", amount: "€1,200", status: "Expédié", date: "2025-01-08" },
    { id: "#ORD-003", customer: "Sophie Laurent", amount: "€650", status: "Livré", date: "2025-01-08" },
    { id: "#ORD-004", customer: "Antoine Rousseau", amount: "€950", status: "En cours", date: "2025-01-07" },
  ];

  const topProducts = [
    { name: "Sac à main Chanel", sales: 45, revenue: "€38,250" },
    { name: "Montre Rolex Submariner", sales: 12, revenue: "€84,000" },
    { name: "Écharpe Hermès", sales: 28, revenue: "€16,800" },
    { name: "Bijoux Cartier", sales: 22, revenue: "€44,000" },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      "En cours": "default",
      "Expédié": "secondary",
      "Livré": "secondary",
      "Annulé": "destructive"
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants] || "default"}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-semibold text-primary">Luxe 2 Paris</h1>
              <p className="text-sm text-muted-foreground">Panneau d'administration</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Produits
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Commandes
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Clients
            </TabsTrigger>
            <TabsTrigger value="promotions" className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Promotions
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Contenu
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-background/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ventes Totales</CardTitle>
                  <Euro className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">€{stats.totalSales}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-medium">+12% </span>
                    vs mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Commandes</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalOrders}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-medium">+8% </span>
                    vs mois dernier
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Clients</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.totalCustomers}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-medium">+15% </span>
                    nouveaux clients
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taux de Conversion</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{stats.conversionRate}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600 font-medium">+0.5% </span>
                    vs mois dernier
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Recent Orders */}
              <Card className="bg-background/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Commandes Récentes</CardTitle>
                  <CardDescription>Vue d'ensemble des dernières commandes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{order.customer}</p>
                          <p className="text-xs text-muted-foreground">{order.id} • {order.date}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-sm font-medium">{order.amount}</p>
                          {getStatusBadge(order.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Eye className="h-4 w-4 mr-2" />
                    Voir toutes les commandes
                  </Button>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card className="bg-background/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Produits les Plus Vendus</CardTitle>
                  <CardDescription>Performance des produits ce mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={product.name} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.sales} ventes</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium">{product.revenue}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Voir analytics détaillés
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-heading font-semibold">Gestion des Produits</h2>
                <p className="text-muted-foreground">Gérez votre catalogue de produits de luxe</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Nouveau Produit
              </Button>
            </div>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Catalogue Produits</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher un produit..." className="pl-8 w-64" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtres
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produit</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Sac à main Chanel Classic</TableCell>
                      <TableCell>Maroquinerie</TableCell>
                      <TableCell>€2,850</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell><Badge>Actif</Badge></TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir détails
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-heading font-semibold">Gestion des Commandes</h2>
                <p className="text-muted-foreground">Suivez et gérez toutes les commandes</p>
              </div>
            </div>

            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Liste des Commandes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">{order.id}</p>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{order.amount}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Voir détails
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Autres onglets avec placeholder content */}
          <TabsContent value="customers">
            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Gestion des Clients</CardTitle>
                <CardDescription>Vue d'ensemble de votre base client</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Module de gestion des clients en cours de développement...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promotions">
            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Promotions et Codes Promo</CardTitle>
                <CardDescription>Créez et gérez vos campagnes promotionnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Module de promotions en cours de développement...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Gestion de Contenu</CardTitle>
                <CardDescription>Modifiez les contenus de votre site</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">CMS intégré en cours de développement...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Paramètres</CardTitle>
                <CardDescription>Configuration générale de l'administration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Paramètres en cours de développement...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;