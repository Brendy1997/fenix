import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'piderecarga', component: PideRecargaComponent },
  // { path: 'pr_confirmacion', component: PrConfirmacionComponent },
  // { path: 'promociones', component: PromocionesComponent },
  // { path: 'tarifas', component: TarifasComponent },
  // { path: 'giftcards', component: GiftCardsComponent },
  // { path: 'recarga', component: RecargaComponent },
  // { path: 'recarga/:num/:pais', component: Recarga2Component },
  // { path: 'login', component: LoginComponent, canActivate: [NotLoggetInGuard] },
  //{ path: 'user-dashboard', component: UserDashboardComponent },
  //{ path: 'user-dashboard', loadChildren: () => import('./components/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) },

  // {
  //   path: 'user-dashboard', component: UserDashboardComponent,
  //   children: [
  //     { path: 'perfil', component: PerfilComponent },
  //     { path: 'contactos', component: ContactosComponent },
  //     { path: 'metodospago', component: MetodosPagoComponent },
  //     { path: 'transacciones', component: TransaccionesComponent },
  //     { path: 'editarperfil', component: EditarPerfilComponent },
  //     { path: 'reportes', component: ReportesComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'pedidos', component: PedidosComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'clientes', component: ClientesComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'testimonios', component: TestimoniosComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'cupones', component: CuponesComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'categorias', component: CategoriasComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'productos', component: ProductosComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'configuraciones', component: ConfiguracionesComponent, children: [{ path: 'idiomas', component: IdiomasComponent }, { path: 'seguridad', component: SeguridadComponent }, { path: 'monedas', component: MonedasComponent }], canActivate: [NotAdminGuard] },
  //     { path: 'crearproducto/:id', component: AddProductosComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'crearproducto', component: AddProductosComponent, canActivate: [NotEmpleadoGuard] },
  //     { path: 'preguntas_frecuentes', component: PreguntasFrecuentesComponent, canActivate: [NotEmpleadoGuard] }

  //   ],
  //   canActivate: [AuthGuard]
  // },
  // { path: 'editarperfil/:id', component: EditarPerfilComponent, canActivate: [NotEmpleadoGuard] },
  // { path: 'pedido/:id', component: PedidoDetallesComponent, canActivate: [NotEmpleadoGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
