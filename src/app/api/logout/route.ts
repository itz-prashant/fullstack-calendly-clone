import { session } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET(){
    await session().set('grantid', null)
    await session().set('email', null)
    await session().destroy();
    revalidatePath('/')
    redirect('/?logged-out=1')
}