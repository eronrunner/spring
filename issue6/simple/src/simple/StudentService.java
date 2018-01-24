package simple;

public class StudentService implements StudentDo {

	@Override
	public void login(Account acc) {
		System.out.println("Account: " + acc.getUserName() + " login");
	}

	@Override
	public void logout(Account acc) {
		System.out.println("Account: " + acc.getUserName() + " logout");
	}

	@Override
	public void registerCourses(Student student) {
		System.out.println(student.toString() + " registered courses");
	}

	@Override
	public void registerVolunteerPlanning(Student student) {
		System.out.println(student.toString() + " registered volunteer planning");
	}

}
