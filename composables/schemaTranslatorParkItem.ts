import { ParkItemTranslation } from "types/parkItemSchema";
export const useTransalateParkItemSchema = (item: string, value: string ) => {
    const translations = {
        'Osoite': <ParkItemTranslation> {
            itemScope: 'https://schema.org/PostalAddress',
            prop: 'streetAddress'
        }
    }
    const translationKey: keyof typeof translations = item as keyof typeof translations;
    if (translations[translationKey]) {
        if (translations[translationKey].itemScope) {
            return `<div itemscope itemtype="${translations[translationKey].itemScope}"><meta itemprop="${translations[translationKey].prop}" content="${value}"/></div>`;
        }
        return `<meta itemprop="${translations[translationKey].prop}" content="${value}"/>`;
    }
    return null;
};