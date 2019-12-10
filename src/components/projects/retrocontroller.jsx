import React from 'react'
import Layout from '../layout'

export default function RetroController() {
    return (
        <Layout>
            <div className="title">
                <h3>Retro Character Controller</h3>
            </div>
            <div className="content">
                <div className="description">
                    <p><strong>Retro Character Controller</strong> is an Asset Pack for the Unity game engine.</p>
                    <p>You will be able make <strong>first-person</strong> games with character movement that <strong>feels
                            good
                        to play</strong> and is reminescent from past games like <strong>Quake</strong> and
                    <strong>Half-Life</strong>.</p>
                    <div className="asset-store">
                        <a className="asset-link"
                            href="https://assetstore.unity.com/packages/tools/physics/retro-character-controller-136481"
                            target="_blank" rel="noopener noreferrer">
                            <object data="assets/asset-store-badge.svg" type="image/svg+xml" width="360px" height="auto">
                                <img src="" alt="Asset Store Link" />
                            </object>
                        </a>
                    </div>
                </div>
                <div className="modal-media">
                    <div className="video-container">
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/LP46eNqQ8wM" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
