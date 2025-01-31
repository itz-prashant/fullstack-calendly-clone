import mongoose from "mongoose"

const fromToSchema = new mongoose.Schema({
    from: String,
    to : String
})

type fromTo = {
    from: string;
    to: string
}

const bookingSchema = new mongoose.Schema({
    monday: fromToSchema,
    tuesday: fromToSchema,
    wednesday: fromToSchema,
    thrusday: fromToSchema,
    friday: fromToSchema,
    saturday: fromToSchema,
    sunday: fromToSchema,
})

const EventTypeSchema = new mongoose.Schema({
    email: String,
    title: String,
    description: String,
    length: Number,
    bookingTimes: bookingSchema
},{
    timestamps: true
})

export type weekdayName = 'monday' | 'tuesday'| 'wednesday' | 'thrusday' | 'friday' | 'saturday' | 'sunday'

type eventType = {
    email: string;
    title: string;
    description: string;
    length: number;
    bookingTimes: Record<weekdayName, fromTo>
}

export const EventTypeModel = mongoose.models?.EventType || mongoose.model<eventType>('EventType', EventTypeSchema)