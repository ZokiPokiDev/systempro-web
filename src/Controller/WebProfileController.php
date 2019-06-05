<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebProfileController extends AbstractController
{
    /**
     * @Route("/", name="web_profile")
     */
    public function indexAction(): Response
    {
        return $this->render('web_profile/index.html.twig', []);
    }
}