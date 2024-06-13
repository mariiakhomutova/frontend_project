import UpperHeader from "@/components/UpperHeader";
import DownHeader from "@/components/DownHeader";
import AuthorMenu from "@/components/AuthorMenu";
import Login from "@/components/Login"
import Registration from "@/components/Registration";
import UpperFooter from "@/components/UpperFooter";
import DownFooter from "@/components/DownFooter";


export default function Authoriz() {
    return (
      <div>
        <UpperHeader />
        <DownHeader />
        <AuthorMenu />
        <Login />
        <Registration />
        <UpperFooter />
        <DownFooter />
      </div>
);
};
