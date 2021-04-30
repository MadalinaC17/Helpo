import { IStrapiMedia } from "./IStrapiMedia";

export class Program {
  id: string;
  Title: string;
  Description: string;
  Body: string;
  Tags: string[];
  TimeNeededInMinutes: Number;
  FeaturedMedia: IStrapiMedia;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: string,
    Title: string,
    Description: string,
    Body: string,
    Tags: string[],
    TimeNeededInMinutes: Number,
    FeaturedMedia: IStrapiMedia,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.Title = Title;
    this.Description = Description;
    this.Body = Body;
    this.Tags = Tags;
    this.TimeNeededInMinutes = TimeNeededInMinutes;
    this.FeaturedMedia = FeaturedMedia;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
