import { AnimationResolver } from '@gluestack-style/animation-resolver';
import { MotionAnimationDriver } from '@gluestack-style/legend-motion-animation-driver';
import { createConfig, createComponents } from '@gluestack-style/react';
import * as componentsTheme from './theme';

export const gluestackUIConfig = createConfig({
  aliases: {
    bg: 'backgroundColor',
    bgColor: 'backgroundColor',
    h: 'height',
    w: 'width',
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pr: 'paddingRight',
    pl: 'paddingLeft',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    mt: 'marginTop',
    mb: 'marginBottom',
    mr: 'marginRight',
    ml: 'marginLeft',
    rounded: 'borderRadius',
  } as const,
  tokens: {
    colors: {
      rose50: '#fff1f2',
      rose100: '#ffe4e6',
      rose200: '#fecdd3',
      rose300: '#fda4af',
      rose400: '#fb7185',
      rose500: '#f43f5e',
      rose600: '#e11d48',
      rose700: '#be123c',
      rose800: '#9f1239',
      rose900: '#881337',
      pink50: '#fdf2f8',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      pink300: '#f9a8d4',
      pink400: '#f472b6',
      pink500: '#ec4899',
      pink600: '#db2777',
      pink700: '#be185d',
      pink800: '#9d174d',
      pink900: '#831843',
      fuchsia50: '#fdf4ff',
      fuchsia100: '#fae8ff',
      fuchsia200: '#f5d0fe',
      fuchsia300: '#f0abfc',
      fuchsia400: '#e879f9',
      fuchsia500: '#d946ef',
      fuchsia600: '#c026d3',
      fuchsia700: '#a21caf',
      fuchsia800: '#86198f',
      fuchsia900: '#701a75',
      purple50: '#faf5ff',
      purple100: '#f3e8ff',
      purple200: '#e9d5ff',
      purple300: '#d8b4fe',
      purple400: '#c084fc',
      purple500: '#a855f7',
      purple600: '#9333ea',
      purple700: '#7e22ce',
      purple800: '#6b21a8',
      purple900: '#581c87',
      violet50: '#f5f3ff',
      violet100: '#ede9fe',
      violet200: '#ddd6fe',
      violet300: '#c4b5fd',
      violet400: '#a78bfa',
      violet500: '#8b5cf6',
      violet600: '#7c3aed',
      violet700: '#6d28d9',
      violet800: '#5b21b6',
      violet900: '#4c1d95',
      indigo50: '#eef2ff',
      indigo100: '#e0e7ff',
      indigo200: '#c7d2fe',
      indigo300: '#a5b4fc',
      indigo400: '#818cf8',
      indigo500: '#6366f1',
      indigo600: '#4f46e5',
      indigo700: '#4338ca',
      indigo800: '#3730a3',
      indigo900: '#312e81',
      blue50: '#eff6ff',
      blue100: '#dbeafe',
      blue200: '#bfdbfe',
      blue300: '#93c5fd',
      blue400: '#60a5fa',
      blue500: '#3b82f6',
      blue600: '#2563eb',
      blue700: '#1d4ed8',
      blue800: '#1e40af',
      blue900: '#1e3a8a',
      lightBlue50: '#f0f9ff',
      lightBlue100: '#e0f2fe',
      lightBlue200: '#bae6fd',
      lightBlue300: '#7dd3fc',
      lightBlue400: '#38bdf8',
      lightBlue500: '#0ea5e9',
      lightBlue600: '#0284c7',
      lightBlue700: '#0369a1',
      lightBlue800: '#075985',
      lightBlue900: '#0c4a6e',
      darkBlue50: '#dbf4ff',
      darkBlue100: '#addbff',
      darkBlue200: '#7cc2ff',
      darkBlue300: '#4aa9ff',
      darkBlue400: '#1a91ff',
      darkBlue500: '#0077e6',
      darkBlue600: '#005db4',
      darkBlue700: '#004282',
      darkBlue800: '#002851',
      darkBlue900: '#000e21',
      cyan50: '#ecfeff',
      cyan100: '#cffafe',
      cyan200: '#a5f3fc',
      cyan300: '#67e8f9',
      cyan400: '#22d3ee',
      cyan500: '#06b6d4',
      cyan600: '#0891b2',
      cyan700: '#0e7490',
      cyan800: '#155e75',
      cyan900: '#164e63',
      teal50: '#f0fdfa',
      teal100: '#ccfbf1',
      teal200: '#99f6e4',
      teal300: '#5eead4',
      teal400: '#2dd4bf',
      teal500: '#14b8a6',
      teal600: '#0d9488',
      teal700: '#0f766e',
      teal800: '#115e59',
      teal900: '#134e4a',
      emerald50: '#ecfdf5',
      emerald100: '#d1fae5',
      emerald200: '#a7f3d0',
      emerald300: '#6ee7b7',
      emerald400: '#34d399',
      emerald500: '#10b981',
      emerald600: '#059669',
      emerald700: '#047857',
      emerald800: '#065f46',
      emerald900: '#064e3b',
      green50: '#f0fdf4',
      green100: '#dcfce7',
      green200: '#bbf7d0',
      green300: '#86efac',
      green400: '#4ade80',
      green500: "#00B37E",
      green600: "#16a34a",
      green700: '#00875F',
      green800: '#166534',
      green900: '#14532d',
      lime50: '#f7fee7',
      lime100: '#ecfccb',
      lime200: '#d9f99d',
      lime300: '#bef264',
      lime400: '#a3e635',
      lime500: '#84cc16',
      lime600: '#65a30d',
      lime700: '#4d7c0f',
      lime800: '#3f6212',
      lime900: '#365314',
      yellow50: '#fefce8',
      yellow100: '#fef9c3',
      yellow200: '#fef08a',
      yellow300: '#fde047',
      yellow400: '#facc15',
      yellow500: '#eab308',
      yellow600: '#ca8a04',
      yellow700: '#a16207',
      yellow800: '#854d0e',
      yellow900: '#713f12',
      amber50: '#fffbeb',
      amber100: '#fef3c7',
      amber200: '#fde68a',
      amber300: '#fcd34d',
      amber400: '#fbbf24',
      amber500: '#f59e0b',
      amber600: '#d97706',
      amber700: '#b45309',
      amber800: '#92400e',
      amber900: '#78350f',
      orange50: '#fff7ed',
      orange100: '#ffedd5',
      orange200: '#fed7aa',
      orange300: '#fdba74',
      orange400: '#fb923c',
      orange500: '#f97316',
      orange600: '#ea580c',
      orange700: '#c2410c',
      orange800: '#9a3412',
      orange900: '#7c2d12',
      red50: '#fef2f2',
      red100: '#fee2e2',
      red200: '#fecaca',
      red300: '#fca5a5',
      red400: '#f87171',
      red500: '#F75A68',
      red600: '#dc2626',
      red700: '#b91c1c',
      red800: '#991b1b',
      red900: '#7f1d1d',
      gray100: "#E1E1E6",
      gray200: "#C4C4CC",
      gray300: "#7C7C8A",
      gray400: "#323238",
      gray500: "#29292E",
      gray600: "#202024",
      gray700: "#121214",
      warmGray50: '#fafaf9',
      warmGray100: '#f5f5f4',
      warmGray200: '#e7e5e4',
      warmGray300: '#d6d3d1',
      warmGray400: '#a8a29e',
      warmGray500: '#78716c',
      warmGray600: '#57534e',
      warmGray700: '#44403c',
      warmGray800: '#292524',
      warmGray900: '#1c1917',
      trueGray50: '#fafafa',
      trueGray100: '#f5f5f5',
      trueGray200: '#e5e5e5',
      trueGray300: '#d4d4d4',
      trueGray400: '#a3a3a3',
      trueGray500: '#737373',
      trueGray600: '#525252',
      trueGray700: '#404040',
      trueGray800: '#262626',
      trueGray900: '#171717',
      coolGray50: '#f9fafb',
      coolGray100: '#f3f4f6',
      coolGray200: '#e5e7eb',
      coolGray300: '#d1d5db',
      coolGray400: '#9ca3af',
      coolGray500: '#6b7280',
      coolGray600: '#4b5563',
      coolGray700: '#374151',
      coolGray800: '#1f2937',
      coolGray900: '#111827',
      blueGray50: '#f8fafc',
      blueGray100: '#f1f5f9',
      blueGray200: '#e2e8f0',
      blueGray300: '#cbd5e1',
      blueGray400: '#94a3b8',
      blueGray500: '#64748b',
      blueGray600: '#475569',
      blueGray700: '#334155',
      blueGray800: '#1e293b',
      blueGray900: '#0f172a',
      tertiary50: '#ecfdf5',
      tertiary100: '#d1fae5',
      tertiary200: '#a7f3d0',
      tertiary300: '#6ee7b7',
      tertiary400: '#34d399',
      tertiary500: '#10b981',
      tertiary600: '#059669',
      tertiary700: '#047857',
      tertiary800: '#065f46',
      tertiary900: '#064e3b',
      error00: '#FEE9E9',
      error50: '#FEE2E2',
      error100: '#FECACA',
      error200: '#FCA5A5',
      error300: '#F87171',
      error400: '#EF4444',
      error500: '#E63535',
      error600: '#DC2626',
      error700: '#B91C1C',
      error800: '#7F1D1D',
      error900: '#991B1B',
      error950: '#220808',
      success0: '#E4FFF4',
      success50: '#CAFFE8',
      success100: '#A2F1C0',
      success200: '#84D3A2',
      success300: '#66B584',
      success400: '#489766',
      success500: '#348352',
      success600: '#2A7948',
      success700: '#206F3E',
      success800: '#166534',
      success900: '#14532D',
      success950: '#071F11',
      warning50: '#fff7ed',
      warning100: '#ffedd5',
      warning200: '#fed7aa',
      warning300: '#fdba74',
      warning400: '#fb923c',
      warning500: '#f97316',
      warning600: '#ea580c',
      warning700: '#c2410c',
      warning800: '#9a3412',
      warning900: '#7c2d12',
      info50: '#f0f9ff',
      info100: '#e0f2fe',
      info200: '#bae6fd',
      info300: '#7dd3fc',
      info400: '#38bdf8',
      info500: '#0ea5e9',
      info600: '#0284c7',
      info700: '#0369a1',
      info800: '#075985',
      info900: '#0c4a6e',
      light50: '#fafaf9',
      light100: '#f5f5f4',
      light200: '#e7e5e4',
      light300: '#d6d3d1',
      light400: '#a8a29e',
      light500: '#78716c',
      light600: '#57534e',
      light700: '#44403c',
      light800: '#292524',
      light900: '#1c1917',
      primary0: '#E5F1FB',
      primary50: '#CCE9FF',
      primary100: '#ADDBFF',
      primary200: '#7CC2FF',
      primary300: '#4AA9FF',
      primary400: '#1A91FF',
      primary500: '#0077E6',
      primary600: '#005DB4',
      primary700: '#004282',
      primary800: '#002851',
      primary900: '#011838',
      primary950: '#000711',
      secondary0: '#F6F6F6',
      secondary50: '#F3F3F3',
      secondary100: '#E9E9E9',
      secondary200: '#DADADA',
      secondary300: '#B0B0B0',
      secondary400: '#737373',
      secondary500: '#5F5F5F',
      secondary600: '#525252',
      secondary700: '#404040',
      secondary800: '#262626',
      secondary900: '#171717',
      secondary950: '#0C0C0C',
      textLight0: '#FCFCFC',
      textLight50: '#F5F5F5',
      textLight100: '#E5E5E5',
      textLight200: '#DBDBDB',
      textLight300: '#D4D4D4',
      textLight400: '#A3A3A3',
      textLight500: '#8C8C8C',
      textLight600: '#737373',
      textLight700: '#525252',
      textLight800: '#404040',
      textLight900: '#262626',
      textLight950: '#171717',
      textDark0: '#FCFCFC',
      textDark50: '#F5F5F5',
      textDark100: '#E5E5E5',
      textDark200: '#DBDBDB',
      textDark300: '#D4D4D4',
      textDark400: '#A3A3A3',
      textDark500: '#8C8C8C',
      textDark600: '#737373',
      textDark700: '#525252',
      textDark800: '#404040',
      textDark900: '#262626',
      textDark950: '#171717',
      borderDark0: '#FCFCFC',
      borderDark50: '#F5F5F5',
      borderDark100: '#E5E5E5',
      borderDark200: '#DBDBDB',
      borderDark300: '#D4D4D4',
      borderDark400: '#A3A3A3',
      borderDark500: '#8C8C8C',
      borderDark600: '#737373',
      borderDark700: '#525252',
      borderDark800: '#404040',
      borderDark900: '#262626',
      borderDark950: '#171717',
      borderLight0: '#FCFCFC',
      borderLight50: '#F5F5F5',
      borderLight100: '#E5E5E5',
      borderLight200: '#DBDBDB',
      borderLight300: '#D4D4D4',
      borderLight400: '#A3A3A3',
      borderLight500: '#8C8C8C',
      borderLight600: '#737373',
      borderLight700: '#525252',
      borderLight800: '#404040',
      borderLight900: '#262626',
      borderLight950: '#171717',
      backgroundDark0: '#FCFCFC',
      backgroundDark50: '#F5F5F5',
      backgroundDark100: '#F1F1F1',
      backgroundDark200: '#DBDBDB',
      backgroundDark300: '#D4D4D4',
      backgroundDark400: '#A3A3A3',
      backgroundDark500: '#8C8C8C',
      backgroundDark600: '#737373',
      backgroundDark700: '#525252',
      backgroundDark800: '#404040',
      backgroundDark900: '#262626',
      backgroundDark950: '#171717',
      backgroundLight0: '#FCFCFC',
      backgroundLight50: '#F5F5F5',
      backgroundLight100: '#F1F1F1',
      backgroundLight200: '#DBDBDB',
      backgroundLight300: '#D4D4D4',
      backgroundLight400: '#A3A3A3',
      backgroundLight500: '#8C8C8C',
      backgroundLight600: '#737373',
      backgroundLight700: '#525252',
      backgroundLight800: '#404040',
      backgroundLight900: '#262626',
      backgroundLight950: '#171717',

      backgroundLightError: '#FEF1F1',
      backgroundDarkError: '#422B2B',
      backgroundLightWarning: '#FFF4EB',
      backgroundDarkWarning: '#412F23',
      backgroundLightSuccess: '#EDFCF2',
      backgroundDarkSuccess: '#1C2B21',
      backgroundLightInfo: '#EBF8FE',
      backgroundDarkInfo: '#1A282E',
      backgroundLightMuted: '#F6F6F7',
      backgroundDarkMuted: '#252526',
      white: '#FFFFFF',
      black: '#000000',
    },
    space: {
      'px': '1px',
      '0': 0,
      '0.5': 2,
      '1': 4,
      '1.5': 6,
      '2': 8,
      '2.5': 10,
      '3': 12,
      '3.5': 14,
      '4': 16,
      '4.5': 18,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
      '9': 36,
      '10': 40,
      '11': 44,
      '12': 48,
      '16': 64,
      '20': 80,
      '24': 96,
      '32': 128,
      '40': 160,
      '48': 192,
      '56': 224,
      '64': 256,
      '72': 288,
      '80': 320,
      '96': 384,
      '1/2': '50%',
      '1/3': '33.333%',
      '2/3': '66.666%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666%',
      '2/6': '33.333%',
      '3/6': '50%',
      '4/6': '66.666%',
      '5/6': '83.333%',
      'full': '100%',
    },
    borderWidths: {
      '0': 0,
      '1': 1,
      '2': 2,
      '4': 4,
      '8': 8,
    },
    radii: {
      'none': 0,
      'xs': 2,
      'sm': 4,
      'md': 6,
      'lg': 8,
      'xl': 12,
      '2xl': 16,
      '3xl': 24,
      'full': 9999,
    },
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    },
    mediaQueries: {
      base: '@media screen and (min-width: 0)',
      xs: '@media screen and (min-width: 400px)',
      sm: '@media screen and (min-width: 480px)',
      md: '@media screen and (min-width: 768px)',
      lg: '@media screen and (min-width: 992px)',
      xl: '@media screen and (min-width: 1280px)',
    },
    letterSpacings: {
      'xs': -0.4,
      'sm': -0.2,
      'md': 0,
      'lg': 0.2,
      'xl': 0.4,
      '2xl': 1.6,
    },
    lineHeights: {
      '2xs': 16,
      'xs': 18,
      'sm': 20,
      'md': 22,
      'lg': 24,
      'xl': 28,
      '2xl': 32,
      '3xl': 40,
      '4xl': 48,
      '5xl': 56,
      '6xl': 72,
      '7xl': 90,
    },
    fontWeights: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extraBlack: '950',
    },
    fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
      mono: undefined,
    },
    fontSizes: {
      '2xs': 10,
      'xs': 12,
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
      '5xl': 48,
      '6xl': 60,
      '7xl': 72,
      '8xl': 96,
      '9xl': 128,
    },
    opacity: {
      0: 0,
      5: 0.05,
      10: 0.1,
      20: 0.2,
      25: 0.25,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      75: 0.75,
      80: 0.8,
      90: 0.9,
      95: 0.95,
      100: 1,
    },
  } as const,
  globalStyle: {
    variants: {
      hardShadow: {
        '1': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: -2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '2': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '3': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        '4': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.5,
          elevation: 10,
        },
        // this 5th version is only for toast shadow
        // temporary
        '5': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 8,
          shadowOpacity: 0.2,
          elevation: 10,
        },
      },
      softShadow: {
        '1': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: '$backgroundLight500',
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
        '2': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
          elevation: 3,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: '$backgroundLight500',
            elevation: 10,
            shadowOpacity: 0.1,
          },
        },
        '3': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 30,
          shadowOpacity: 0.1,
          elevation: 4,
          _android: {
            shadowColor: '$backgroundLight500',
            elevation: 15,
            shadowOpacity: 0.15,
          },
        },
        '4': {
          shadowColor: '$backgroundLight900',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 40,
          shadowOpacity: 0.1,
          elevation: 10,
          _android: {
            shadowColor: '$backgroundLight500',
            elevation: 20,
            shadowOpacity: 0.2,
          },
        },
      },
    },
  },
  plugins: [new AnimationResolver(MotionAnimationDriver)],
});

type Config = typeof gluestackUIConfig; // Assuming `config` is defined elsewhere

type Components = typeof componentsConfig;

export const componentsConfig = createComponents(componentsTheme);

export type { UIConfig, UIComponents } from '@gluestack-ui/themed';

export interface IConfig { }
export interface IComponents { }

declare module '@gluestack-ui/themed' {
  interface UIConfig extends Omit<Config, keyof IConfig>, IConfig { }
  interface UIComponents
    extends Omit<Components, keyof IComponents>,
    IComponents { }
}

export const config = {
  ...gluestackUIConfig,
  components: componentsConfig,
};
