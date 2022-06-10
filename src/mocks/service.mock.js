import { DocumentScannerRounded } from "@mui/icons-material";
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import LibraryAddCheckTwoToneIcon from '@mui/icons-material/LibraryAddCheckTwoTone';

const data = [
  {
    id: 1,
    key: "service-1",
    title: "Refreshing Design",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <HomeWorkTwoToneIcon color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 2,
    key: "service-2",
    title: "Plan your dream",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DocumentScannerRounded color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 3,
    key: "service-3",
    title: "Renovation",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <HandymanIcon color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 4,
    key: "service-4",
    title: "Modular ideas",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <TipsAndUpdatesTwoToneIcon color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 5,
    key: "service-5",
    title: "Fully Customizable",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <DashboardCustomizeTwoToneIcon color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
  {
    id: 6,
    key: "service-6",
    title: "Regular Check",
    description:
      "We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.",
    icon: (
      <LibraryAddCheckTwoToneIcon color="secondary" sx={{ fontSize: "4rem" }} />
    ),
  },
];

export default data;
