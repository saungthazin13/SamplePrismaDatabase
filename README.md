#  Sample Prisma Database

This project is a simple setup using *Prisma ORM* with a **PostgreSQL** database. 

##  Technologies Used

 **Node.js** – JavaScript runtime environment<br>
**Prisma ORM** – Type-safe database ORM for Node.js & TypeScript<br>
**PostgreSQL** – Relational database<br>
**TypeScript** – Superset of JavaScript with types<br>
**dotenv** – Loads environment variables from `.env`<br>
**ts-node** – TypeScript execution engine for Node.js<br>
**npm scripts** – Task runner and automation

1.Clone & enter =>
  git clone https://github.com/saungthazin13/SamplePrismaDatabase.git <br>
  cd SamplePrismaDatabase

2.Install dependencies=>
  npm install

3.Database setup=>
.envမှာပြင်ရန်(DATABASE_URL="postgresql://username:password@localhost:5432/mydb")

4.Run migrations=>
  npx prisma migrate dev --name init

5.Launch Prisma Studio=>
  npx prisma studio





