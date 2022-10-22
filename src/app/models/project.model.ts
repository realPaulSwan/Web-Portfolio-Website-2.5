export class Project {
  id: number;
  name: string;
  projectStartYear: string;
  projectEndYear: string;
  long_description: string;
  short_description: string;
  likes: number;
  imageUrl: string;
  url_link: string;
  image_gallary: { imageSrc: string; imageAlt: string }[];
  detail_component_name: string;
  tags: string[];


  constructor(id = 0,name = "test_string", projectStartYear = "", projectEndYear = "",  long_description = "",short_description = "", likes = 0, url_link ="", imageUrl = "",detail_component_name = "", tags = ["test","test2","test3","test4"], image_gallary = [      {
    imageSrc:
        'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    imageAlt: 'nature1',
  }]){
    this.id = id;
    this.name = name;
    this.long_description = long_description;
    this.short_description = short_description;
    this.projectStartYear = projectStartYear;
    this.projectEndYear = projectEndYear;
    this.likes = likes;
    this.imageUrl = imageUrl;
    this.url_link = url_link;
    this.image_gallary = image_gallary;
    this.detail_component_name = detail_component_name;
    this.tags = tags;
}
}
