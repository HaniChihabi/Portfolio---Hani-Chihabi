import { RootLayout } from './components/RootLayout';
import './styles/tailwind.css';
import { Providers } from './providers';
import {NextIntlClientProvider, useMessages} from 'next-intl';

export const dynamic = 'auto'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'Studio - Award winning developer studio based in Denmark',
  },
};

// Define the LocaleLayout component
function LocaleLayout({ children, locale }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className='bg-black'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Modify the existing Layout component to include LocaleLayout
export default function Layout({ children, params: { locale } }) {
  return (
    <LocaleLayout locale={locale} className="-space-y-32">
      <Providers>
      <RootLayout>{children}</RootLayout>
      </Providers>

    </LocaleLayout>
  );
}
