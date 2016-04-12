# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#creating Schools

school_1 = School.create(name: 'Rose Springs Elementary')
school_2 = School.create(name: 'Middle Canyon Jr. High')
school_3 = School.create(name: 'Tooele High School')

#create Grades
grade_k = Grade.create(grade: 'K')
grade_1 = Grade.create(grade: '1')
grade_2 = Grade.create(grade: '2')
grade_3 = Grade.create(grade: '3')
grade_4 = Grade.create(grade: '4')
grade_5 = Grade.create(grade: '5')
grade_6 = Grade.create(grade: '6')
grade_7 = Grade.create(grade: '7')
grade_8 = Grade.create(grade: '8')
grade_9 = Grade.create(grade: '9')
grade_10 = Grade.create(grade: '10')
grade_11 = Grade.create(grade: '11')
grade_12 = Grade.create(grade: '12')


#create reading levels
level_1 = ReadingLevel.create(level: 'A')
level_2 = ReadingLevel.create(level: 'B')
level_3 = ReadingLevel.create(level: 'C')
level_4 = ReadingLevel.create(level: 'D')
level_5 = ReadingLevel.create(level: 'E')
level_6 = ReadingLevel.create(level: 'F')

#create Teachers
teacher_1 = Teacher.create(title: 'Mrs', first_name: 'Rachel', last_name: 'Bohman', grade_id: 2, school_id: 1, email: 'rbohman@test.edu', password: 'DisneyLover')
teacher_2 = Teacher.create(title: 'Mrs', first_name: 'Joanna', last_name: 'Smith', grade_id: 4, school_id: 1, email: 'jsmith@test.edu', password: 'BookLover')
teacher_3 = Teacher.create(title: 'Mr', first_name: 'John', last_name: 'Johnson', grade_id: 7, school_id: 2, email: 'jjohnson@test.edu', password: 'FunTeacher')
teacher_4 = Teacher.create(title: 'Ms', first_name: 'Sarah', last_name: 'Hunt', grade_id: 8, school_id: 2, email: 'shunt@test.edu', password: 'ScienceForLife')
teacher_5 = Teacher.create(title: 'Mrs', first_name: 'Chelsea', last_name: 'Beckstead', grade_id: 10, school_id: 3, email: 'cbeckstead@test.edu', password: 'DanceTeach')
teacher_6 = Teacher.create(title: 'Mr', first_name: 'Fred', last_name: 'Jo', grade_id: 12, school_id: 3, email: 'fjo@test.edu', password: 'HistoryNow')


#create authors
aa = Author.create(first_name: 'J.K.', last_name: 'Rowling')
ab = Author.create(first_name: 'John', last_name: 'Smith')
ac = Author.create(first_name: 'LL', last_name: 'CoolJay')
ad = Author.create(first_name: 'Frank', last_name: 'Johnson')
ae = Author.create(first_name: 'Larry', last_name: 'Wilder')
af = Author.create(first_name: 'Yoda', last_name: 'Chewy')
ag = Author.create(first_name: 'Barney', last_name: 'Stinson')





#create books for teachers
teacher_1.books.create(title: 'Best Book Ever', author: aa, reading_level: level_1)
teacher_2.books.create(title: 'Best Book', author: ab, reading_level: level_2)
teacher_3.books.create(title: 'Best Ever', author: ac, reading_level: level_3)
teacher_4.books.create(title: 'How To Read', author: ad, reading_level: level_4)
teacher_5.books.create(title: 'The Book', author: ae, reading_level: level_5)
teacher_6.books.create(title: 'Book of all books', author: af, reading_level: level_6)

teacher_1.books.create(title: 'Shark Week', author: ab, reading_level: level_1)
teacher_2.books.create(title: 'Harry Potter', author: aa, reading_level: level_2)
teacher_3.books.create(title: 'Twighlight', author: af, reading_level: level_3)
teacher_4.books.create(title: 'Hunger Games', author: ag, reading_level: level_4)
teacher_5.books.create(title: 'What About The?', author: af, reading_level: level_5)
teacher_6.books.create(title: 'Find The Word', author: ac, reading_level: level_6)





