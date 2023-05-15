This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



ACADEMIA DE STUDII ECONOMICE DIN BUCUREȘTI
CLOUD COMPUTING


 

FLORĂRIE ONLINE





ȘILOHI ANDREEA
GRUPA 1121

București 2023

Link video prezentare proiect: https://youtu.be/RQX8r2GLNfY
Link publicare Vercel: https://cloud-computing-project-phi.vercel.app/
Link publicare AWS: http://3.122.190.152/
Link publicare Github: https://github.com/AndreeaSilohi/cloud-computing-project

1. Introducere
Aceasta documentatie tehnica reprezinta un ghid esential pentru a utiliza si a intelege aplicatia pe care am creat-o in cadrul materiei studiate “Cloud Computing”.  Scopul aplicatiei create este acela de a prezenta tehnologiile cloud studiate in cadrul seminarului, informatii detaliate despre caracteristicile si functionalitatile proiectului pentru intelegerea cat mai facila a acestuia.
2.  Descriere problemă 
Am ales sa implementez o aplicatie  care are drept tema dezvoltarea unei florarii online. In cadrul aplicatiei dezvoltate, am implementat 3 pagini, cu 3 rute diferite: pagina principala care are drept scop prezentarea generala a buchetelor de flori, cu titlu, descriere, pret si o imagine. Cea de-a doua pagina reprezinta un formular de adaugare a unui buchet in pagina principala. Cea de-a treia reprezinta componenta de chat, prin care ii putem adresa o intrebare robotului si acesta sa ne raspunda.
Ca modalitate de stocare a datelor, am ales sa folosesc MongoDB, o baza de date non-relationala in care am trimis buchetele nou adaugate.

 
Figura 1. Date MongoDB

3. Prezentarea API
REST API
REST API (cunoscută și ca API RESTful) este o interfață de programare a aplicațiilor (API sau API web) care se conformează constrângerilor stilului arhitectural REST și permite interacțiunea cu serviciile web RESTful. REST înseamnă transfer de stat reprezentativ și a fost creat de informaticianul Roy Fielding.
Un API este un set de definiții și protocoale pentru construirea și integrarea aplicațiilor software. Uneori se face referire la un contract între un furnizor de informații și un utilizator de informații - stabilirea conținutului cerut de la consumator (apelul) și conținutul cerut de producător (răspunsul). De exemplu, designul API pentru un serviciu meteorologic ar putea specifica faptul că utilizatorul furnizează un cod poștal și că producătorul răspunde cu un răspuns în două părți, prima fiind temperatura ridicată, iar a doua fiind cea scăzută.


 
Figura 2. Metode API
 
Figura 3. Metode API


 OpenAI Chat API
API-ul OpenAI poate fi aplicat practic la orice sarcină care implică înțelegerea sau generarea unui limbaj natural, cod sau imagini. Oferim un spectru de modele cu diferite niveluri de putere potrivite pentru diferite sarcini, precum și capacitatea de a-ți regla propriile modele personalizate. Aceste modele pot fi folosite pentru orice, de la generarea de conținut până la căutare semantică și clasificare.




4. Flux de date 
•	Exemple de request / response

Mai departe vor fi prezentate cateva screenshot-uri din Postman, obtinute in urma testarii metodelor de GET, POST, PUT si DELETE.
Exemplu de GET:

 
Figura 4. Testare GET in Postman








Exemplu de POST:
 
Figura 5. Testare POST in Postman


Exemplu de PUT: 
Figura 6. Testare PUT in Postman









Exemplu de DELETE:
 
Figura 7. Testare DELETE in Postman



•	Metode HTTP
 

Figura 8. Metode HTTP

 
Figura 9. Metode HTTP


5. Capturi ecran aplicație 
Partea de frontend a aplicatiei a fost realizata cu NextJS, iar pentru stilizare am folosit libraria Tailwind CSS.
Pentru a o publica pe internet, am folosit Vercel, conectand astfel repository-ul de Git pentru a putea incarca aplicatia.

 
Figura 10. Publicarea pe Vercel a aplicatiei

Pagina principala:
 
Figura 11. Pagina principala



Formularul de introducere a unui nou buchet:
 
Figura 12. Formularul de introducere a unui buchet


Componenta de chat:
 
Figura 13. Componenta de chat


Aplicatia a fost publicata si pe o masina virtuala din cadrul AWS.
Am instalat Docker si am pregatit proiectul pentru a fi introdus intr-o imagine Docker.
  
Figura 14. Instalare Docker


Acesta se afla pe instanta 3.122.190.152
 
Figura 15. Instantele de AWS

Proiectul publicat pe instanta AWS:
 
Figura 16. Proiectul publicat pe instanta AWS

Referinte: 
https://www.redhat.com/en/topics/api/what-is-a-rest-api
https://blog.dreamfactory.com/8-api-documentation-examples/

