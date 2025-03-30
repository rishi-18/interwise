// import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";
import Agents from "@/components/Agents";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview Generation</h3>

            <Agents userName={user?.name ?? "Guest"} userId={user?.id ?? ""} type="generate" />
        </>
    )
}
export default Page