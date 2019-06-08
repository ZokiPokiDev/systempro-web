<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebProfileController extends AbstractController
{
    /**
     * @Route("/jackson", name="web_profile_jackson")
     */
    public function jacksonAction(): Response
    {
        return $this->render('web_profile/jackson.html.twig', []);
    }

    /**
     * @Route("/kerge/", name="web_profile_kerge")
     */
    public function kergeAction(): Response
    {
        return $this->render('web_profile/kerge.html.twig', []);
    }

    /**
     * @Route("/personala/", name="web_profile_personala")
     */
    public function personalaAction(): Response
    {
        return $this->render('web_profile/personala.html.twig', []);
    }

    /**
     * @Route("/daniels/", name="web_profile_daniels")
     */
    public function danielsAction(): Response
    {
        return $this->render('web_profile/daniels.html.twig', []);
    }
}