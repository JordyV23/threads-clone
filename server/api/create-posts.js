import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


/**
 * Funcion que crea un post
 * @returns {Array} posts
 * @param {Object} event
 */
export default defineEventHandler(async (event) => {
  //Lee el body de la petición
  const body = await readBody(event);

  //Hace la petición a la base de datos
  const res = await prisma.post.create({
    //Crea el post con los datos del body
    data: {
      userId: body.userId,
      name: body.name,
      image: body.Image,
      text: body.text,
      picture: body.picture,
    },
  });

  return res;
});
