export class Project {
  id: number;
  name: string;
  project_start_date: number;
  project_end_date: number;
  long_description: string;
  short_description: string;
  likes: number;
  imageUrl: string;
  image_gallary: { imageSrc: string; imageAlt: string }[];
  githubUrl: string;
  detail_component_name: string;
  tags: string[];


  constructor(id = 0,name = "test_string",project_start_date = 0,project_end_date = 0,long_description = "",short_description = "", likes = 0, imageUrl = "",githubUrl = "",detail_component_name = "", tags = ["test","test2","test3","test4"], image_gallary = [      {
    imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'nature1',
  }]){
    this.id = id;
    this.name = name;
    this.project_start_date = project_start_date;
    this.project_end_date = project_end_date;
    this.long_description = long_description;
    this.short_description = short_description;
    this.likes = likes;
    this.imageUrl = imageUrl;
    this.image_gallary = image_gallary;
    this.githubUrl = githubUrl;
    this.detail_component_name = detail_component_name;
    this.tags = tags;
}
}
