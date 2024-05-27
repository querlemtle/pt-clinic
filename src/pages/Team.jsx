import { ptM1 } from "@/assets/images";
import StaffCard from "@/components/StaffCard";

export default function Team() {
  return (
    <main className="main">
      <section className="team">
        <StaffCard pfp={ptM1} staffName="苑博治" staffTitle="院長" />
        <StaffCard pfp={ptM1} staffName="苑博治" staffTitle="院長" />
      </section>
    </main>
  );
}
