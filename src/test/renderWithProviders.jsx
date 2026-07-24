import { render } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';
import { ThemeProvider } from '../context/ThemeContext';
import { TranslationProvider } from '../context/TranslationContext';

export function renderWithProviders(ui) {
  return render(
    <LanguageProvider>
      <ThemeProvider>
        <TranslationProvider>{ui}</TranslationProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
