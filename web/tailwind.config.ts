import type {Config} from 'tailwindcss';
export default {darkMode:'class',content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{boxShadow:{soft:'0 10px 35px rgba(25,30,60,.045)'}}},plugins:[]} satisfies Config;
