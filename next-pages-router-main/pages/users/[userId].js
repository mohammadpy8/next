import { useRouter } from "next/router";

const Users = () => {

    const router = useRouter();
    const id = router.query.userId

    return (
        <div>
            <p>id : {id}</p>
        </div>
    );
};

export default Users;