type StudentProps = {
  name: string;
  usn: string;
  branch: string;
  sem: string;
};

function Student({ name, usn, branch, sem }: StudentProps) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>USN: {usn}</p>
      <p>Branch: {branch}</p>
      <p>Semester: {sem}</p>
    </div>
  );
}

export default Student;