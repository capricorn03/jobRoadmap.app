import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUser } from "@/lib/actions/user";


const NewUserForm = ()=>{
return(
    <div>
        <form action={createUser} className="flex flex-col gap-5 border p-5 shadow-lg my-10 bg-white">
            <label htmlFor="name">Name</label>
            <Input required type="text" name="name" id=""/>
            <label htmlFor="email">email</label>
            <Input required type="text" name="email" id=""/>
            <Button type="submit">
                Submit
            </Button>

        </form>
    </div>
)
}

export default NewUserForm;