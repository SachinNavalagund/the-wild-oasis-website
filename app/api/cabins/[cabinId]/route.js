import {
  getBookedDatesByCabinId,
  getCabins,
} from "@/app/_lib/data-service";

//get route end point
export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabins(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch (error) {
    console.log(error.message);
    return Response.json({ message: "Cabin not found" });
  }
}

// //post route end point
// export async function POST() {}
