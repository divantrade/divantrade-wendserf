import en from '@/messages/en.json';
import ar from '@/messages/ar.json';

export default function ServiceTest({params}:{params:{locale:'en'|'ar'; slug:string}}){
  const dict = params.locale === 'ar' ? (ar as any) : (en as any);
  const list = Array.isArray(dict?.services?.list) ? dict.services.list : [];
  const svc = list.find((s:any)=> s.slug === params.slug);

  return (
    <div style={{padding:20}}>
      Step 2 OK<br/>
      {JSON.stringify(svc)}
    </div>
  );
}
