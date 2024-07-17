import { Injectable } from "@angular/core";
import { SectionInfoModel } from "../model/section-info.model";

@Injectable ({providedIn : 'root'})

export class SectionService{
    sectionDetailsList : any[] = [
        new SectionInfoModel('Section 1', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti itaque quidem! Dicta aspernatur, iure perferendis voluptates esse adipisci labore repellat debitis totam delectus corporis placeat vitae, dolores, temporibus blanditiis officiis aut quisquam enim! Perferendis quia accusantium voluptatibus neque aliquid aliquam repellendus, voluptatum ullam, harum iste vel nisi maxime quisquam!"),
        new SectionInfoModel('Section 2', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam nemo in, id, deleniti fugiat iure architecto dignissimos eum, ex praesentium odio a optio perspiciatis provident sunt quidem magnam consectetur ullam labore necessitatibus! Dolore unde quod repellat repellendus a expedita earum porro voluptatem? Nulla molestiae nihil, cupiditate consequuntur molestias qui?")
    ]

    getData(data : any){
        this.sectionDetailsList.push(data);
    }
}