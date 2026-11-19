export type Tool={slug:string;title:string;description:string;category:'Documents'|'Images'|'PDF tools';accept:string;output:string;icon:string};
export const tools:Tool[]=[
{slug:'word-to-pdf',title:'Word to PDF',description:'Turn Word documents into share-ready PDFs.',category:'Documents',accept:'.doc,.docx',output:'PDF',icon:'file-text'},
{slug:'pdf-to-word',title:'PDF to Word',description:'Convert PDFs to editable Word documents.',category:'Documents',accept:'.pdf',output:'DOCX',icon:'file-pen'},
{slug:'excel-to-pdf',title:'Excel to PDF',description:'Export spreadsheets as professional PDFs.',category:'Documents',accept:'.xls,.xlsx',output:'PDF',icon:'table'},
{slug:'ppt-to-pdf',title:'PowerPoint to PDF',description:'Make presentations easy to share.',category:'Documents',accept:'.ppt,.pptx',output:'PDF',icon:'presentation'},
{slug:'jpg-to-png',title:'JPG to PNG',description:'Convert JPEG images into crisp PNG files.',category:'Images',accept:'.jpg,.jpeg',output:'PNG',icon:'image'},
{slug:'png-to-pdf',title:'PNG to PDF',description:'Save a PNG image as a PDF page.',category:'Images',accept:'.png',output:'PDF',icon:'file-image'},
{slug:'pdf-to-jpg',title:'PDF to JPG',description:'Export every PDF page as a JPEG image.',category:'PDF tools',accept:'.pdf',output:'ZIP of JPGs',icon:'images'},
{slug:'merge-pdf',title:'Merge PDF',description:'Combine multiple PDF documents into one.',category:'PDF tools',accept:'.pdf',output:'PDF',icon:'files'},
{slug:'compress-image',title:'Compress Image',description:'Shrink JPG, PNG, and WebP image files.',category:'Images',accept:'.jpg,.jpeg,.png,.webp',output:'Image',icon:'minimize-2'}
];export const categories=['Documents','Images','PDF tools'] as const;export const basePath=process.env.NEXT_PUBLIC_BASE_PATH||'';