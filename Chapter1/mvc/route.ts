export const appRoutes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'payments',
        component: PaymentsComponent,
        data: { title: 'Payments' }
    }
]