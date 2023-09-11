import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Funcion que elimina un post
 */
export default defineEventHandler(async (event) => {
  //Hace la petición a la base de datos
  const deleted = await prisma.posts.delete({
    //Condiciona la busqueda por el id del post
    where: {
      id: Number(event.context.params.id),
    },
  });

  //Devuelve el post eliminado
  return deleted;
});
