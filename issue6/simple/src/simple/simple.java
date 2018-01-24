package simple;

public class simple {

	public static void main(String[] args) {
		Student student = new Student("datNguyen","123456","nphatdat@tma.com.vn","begin","Nguyen","Phat Dat","123/321");
		Teacher teacher = new Teacher("namNguyen","123456","nkhoanam@tma.com.vn","super","Nguyen","Khoa Nam","456/654");
		
		StudentService stserve = new StudentService();
		
		TeacherService tserve = new TeacherService();
		
		stserve.login(student);
		tserve.login(teacher);
		
		stserve.registerCourses(student);
		stserve.registerVolunteerPlanning(student);
		
		tserve.createCoursePlanning(teacher);
		tserve.recordScores(teacher);

		tserve.logout(student);
		stserve.logout(teacher);
	}

}
