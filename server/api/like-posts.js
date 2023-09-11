import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Funcion que crea un like relacionado con un post
 */
export default defineEventHandler(async (event) => {
  //Lee el body de la petición
  const body = await readBody(event);

  //Hace la petición a la base de datos
  const res = await prisma.likes.create({
    //Crea el like con los datos del body
    data: {
      userId: body.userId,
      postId: body.postId,
    },
  });

  return res;
});
