export class Project {
  id: number;
  name: string;
  projectStartYear: string;
  projectEndYear: string;
  git_url: string;
  description: string;
  likes: number;
  imageUrl: string;
  image_gallary: { imageSrc: string; imageAlt: string }[];
  detail_component_name: string;
  tags: string[];


  constructor(id = 0,name = "displayall", projectStartYear = "", projectEndYear = "",  git_url = "",description = "", likes = 0, imageUrl = "",detail_component_name = "", tags = ["test","test2","test3","test4"], image_gallary = [      {
    imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'nature1',
  }]){
    this.id = id;
    this.name = name;
    this.git_url = git_url;
    this.description = description;
    this.projectStartYear = projectStartYear;
    this.projectEndYear = projectEndYear;
    this.likes = likes;
    this.imageUrl = imageUrl;
    this.image_gallary = image_gallary;
    this.detail_component_name = detail_component_name;
    this.tags = tags;
}
}
