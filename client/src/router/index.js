import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/components/Index";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Campaigns from "@/components/Campaigns"
import CreateCampaigns from "@/components/CreateCampaigns";
import EditCampaigns from "@/components/EditCampaigns";
import CampaignProgress from "@/components/CampaignProgress";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Donation from "@/components/Donation";
import CandidateProfile from "@/components/CandidateProfile";


Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Index",
            component: Index
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/Register",
            name: "Register",
            component: Register
        },
        {
        path: "/campaigns",
        name: "Campaigns",
        component: Campaigns
        },
        {
        path: "/campaigns/:id",
        name: "CandidateProfile",
        component: CandidateProfile
        },
        {
            path: "/add",
            name: "CreateCampaigns",
            component: CreateCampaigns
        },
        {
            path: "/edit",
            name: "EditCampaigns",
            component: EditCampaigns
        },
        {
            path: "/progress",
            name: "CampaignProgress",
            component: CampaignProgress
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/donation",
            name: "Donation",
            component: Donation
        }
    ],
    mode: 'history'
});
