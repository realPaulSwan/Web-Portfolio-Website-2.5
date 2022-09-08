export class Project {
  id: number;
  name: string;
  project_start_date: number;
  project_end_date: number;
  long_description: string;
  short_description: string;
  likes: number;
  imageUrl: string;
  githubUrl: string;
  detail_component_name: string;
  tags: string[];


  constructor(id = 0,name = "test_string",project_start_date = 0,project_end_date = 0,long_description = "",short_description = "", likes = 0, imageUrl = "",githubUrl = "",detail_component_name = "", tags = ["test","test2","test3","test4"]){
    this.id = id;
    this.name = name;
    this.project_start_date = project_start_date;
    this.project_end_date = project_end_date;
    this.long_description = long_description;
    this.short_description = short_description;
    this.likes = likes;
    this.imageUrl = imageUrl;
    this.githubUrl = githubUrl;
    this.detail_component_name = detail_component_name;
    this.tags = tags;
}
}
