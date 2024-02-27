import { RootLayout } from './components/RootLayout';
import './styles/tailwind.css';

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
};

// Define the LocaleLayout component
function LocaleLayout({ children, locale }) {
  return (
    <html lang={locale} className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

// Modify the existing Layout component to include LocaleLayout
export default function Layout({ children, params: { locale } }) {
  return (
    <LocaleLayout locale={locale}>
      <RootLayout>{children}</RootLayout>
    </LocaleLayout>
  );
}
