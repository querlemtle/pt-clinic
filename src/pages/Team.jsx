import staff from "../data/staff";
import StaffCard from "../components/StaffCard";

export default function Team() {
  return (
    <main className="main">
      <h2 className="title title--center">團隊成員</h2>
      <section className="team">
        {staff.map((staff, i) => {
          return (
            <StaffCard
              key={i}
              isPfpAtRight={i % 2 === 0 ? false : true}
              {...staff}
            />
          );
        })}
      </section>
    </main>
  );
}
