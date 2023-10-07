import { SETTINGS } from '@/config/settings';
import { formatBytes } from '@/utils/formatBytes';

const limitSize = SETTINGS.fileSizeLimits.partnerLogo;

export const partnerValidateOptions = {
  name: {
    required: 'Введіть назву',
    minLength: {
      value: 5,
      message: 'Мінімальна довжина поля 5 символів',
    },
    maxLength: {
      value: 100,
      message: 'Максимальна довжина поля 100 символів',
    },
    pattern: {
      value: /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻа-яА-ЯҐґЄєІіЇї\s\d'’-]+$/,
      message: 'Введіть коректну назву',
    },
  },

  partnerImg: {
    validate: (
      value: string | number | boolean | File | File[] | undefined
    ) => {
      if (typeof value === 'object' && value !== null && value.length > 0) {
        const file = value[0];

        const checkType = [
          'image/jpeg',
          'image/png',
          'image/webp',
          'for-url',
        ].includes(file.type);
        if (!checkType) return 'Виберіть коректне зображення';

        const checkSize = file.size <= limitSize;
        if (!checkSize)
          return `Виберіть зображення до ${formatBytes(limitSize)}`;

        return true;
      } else {
        return 'Додайте логотип.';
      }
    },
  },

  homeUrl: {
    pattern: {
      value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/,
      message: 'Введіть коректне посилання',
    },
  },
};
