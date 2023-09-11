import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Funcion que obtiene todos los posts
 * @returns {Array} posts
 */
export default defineEventHandler(async () => {
  //Hace la petición a la base de datos
  let posts = await prisma.post.findMany({
    orderBy: { id: "desc" },
    include: { likes: true },
  });

  //Devuelve los posts
  return posts;
});
