import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export default function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <div className="contenedor">
      <TwitterFollowCard
        formatUserName={formatUserName}
        name="JC Del Rio"
        userName="jcdelrioe"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Miguel Angel Duran"
        userName="midudev"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Milton Granda"
        userName="mgranda"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        name="Victor Rodriguez"
        userName="vrodriguez"
      />
    </div>
  );
}
