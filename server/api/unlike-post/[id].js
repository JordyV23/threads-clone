import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Funcion que elimina un like relacionado con un post
 */
export default defineEventHandler(async (event) => {
  //Hace la petición a la base de datos
  const deleted = await prisma.likes.delete({
    //Condiciona la busqueda por el id del like
    where: {
      id: Number(event.context.params.id),
    },
  });

  //Devuelve el like eliminado
  return deleted;
});
