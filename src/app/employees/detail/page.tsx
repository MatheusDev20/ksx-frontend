import Image from 'next/image'
import Employee from '../../assets/imgs/happy-employee1.jpg'
import { InfoLabel } from '../components/InfoLabel'

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row sm:h-full gap-10 p-3 max-w-full">
      {/* Basic Info + Avatar */}
      <aside className="md:w-1/5 p-6 flex gap-6 flex-col shadow-xl ml-8 border items-center border-solid">
        {/* Avatar + Name */}
        <div className="flex flex-col gap-2 items-center">
          <Image
            src={Employee}
            alt="employee_picture"
            className="w-48 h-48 rounded-md"
          />
          <span className="text-md font-black leading-6">Brief Shortcase</span>
          <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-800 bg-blue-200 uppercase last:mr-0 mr-1">
            Employee
          </span>
        </div>

        {/* Other Infos */}
        <div className="flex flex-col gap-5 w-full">
          <InfoLabel title="Journey" info="5x8" />
          <InfoLabel title="Admission Date" info="10/05/2023" />
          <InfoLabel title="Registration" info="05323" />
          <InfoLabel title="Manager" info="Diego Moraes" />
          <InfoLabel title="Position" info="FrontEnd Engineer" />
          <InfoLabel title="Department" info="IT" />
        </div>
      </aside>

      {/* Personal Information + Payment information */}

      <div className="md:flex-1 shadow-lg">Other infos</div>
    </div>
  )
}
